import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud-operation',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './crud-operation.component.html',
  styleUrl: './crud-operation.component.scss'
})
export class CrudOperationComponent implements OnInit {

  searchValue = new FormControl('');
  employeeList: any[] = [];
  storedEmployeeList: any[] = [];

  isAddEmployee = false;
  isEditEmployee = false;

  employeeForm!: FormGroup;
  selectedFile: File | null = null;
  currentImage: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loadEmployeeList();
    this.searchValue.valueChanges.subscribe(() => this.searchEmployee());
  }

  private loadEmployeeList() {
    const data = localStorage.getItem('employeeList');
    this.storedEmployeeList = data ? JSON.parse(data) : [];
    this.employeeList = [...this.storedEmployeeList];
  }

  private saveEmployeeList() {
    localStorage.setItem('employeeList', JSON.stringify(this.storedEmployeeList));
    this.employeeList = [...this.storedEmployeeList];
  }

  declareEmployeeForm() {
    this.employeeForm = this.fb.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required)
    });

  }

  openAddEmployeeForm() {
    this.isAddEmployee = !this.isAddEmployee;
    this.isEditEmployee = false;

    if (this.isAddEmployee) {
      this.declareEmployeeForm();
    } else {
      this.employeeForm?.reset();
    }
  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.employeeForm.get('image')?.setValue(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      this.employeeForm.get('image')?.setValue('');
    }
  }

  onSubmit() {
    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();
      return;
    }

    const formData = { ...this.employeeForm.getRawValue() };

    if (this.isEditEmployee) {
      const index = this.storedEmployeeList.findIndex(e => e.email === formData.email);
      if (index !== -1) {
        this.storedEmployeeList[index] = formData;
      }
    } else {
      this.storedEmployeeList.push(formData);
    }

    this.saveEmployeeList();
    this.cancel();
  }

  cancel() {
    this.isAddEmployee = false;
    this.isEditEmployee = false;
    this.selectedFile = null;
    this.employeeForm.reset();
    this.employeeForm.get('email')?.enable();
  }

  editEmployee(index: number) {
    this.isAddEmployee = true;
    this.isEditEmployee = true;
    this.declareEmployeeForm();

    const employee = this.employeeList[index];
    this.employeeForm.patchValue({
      firstName: employee.firstName,
      lastName: employee.lastName,
      email: employee.email,
      phone: employee.phone,
      image: '' // Can't patch file input
    });

    this.employeeForm.get('email')?.disable();
  }

  deleteEmployee(index: number) {
    this.storedEmployeeList.splice(index, 1);
    this.saveEmployeeList();
  }

  searchEmployee() {
    const search = this.searchValue.value?.toLowerCase() || '';
    this.employeeList = this.storedEmployeeList.filter(employee =>
      employee.firstName.toLowerCase().includes(search) ||
      employee.lastName.toLowerCase().includes(search) ||
      employee.email.toLowerCase().includes(search) ||
      employee.phone.toLowerCase().includes(search)
    );
  }
}
