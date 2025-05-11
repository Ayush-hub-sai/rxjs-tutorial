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
  imagePreviewList: any[] = [];

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
      image: new FormControl([], Validators.required)
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
    const files = (event.target as HTMLInputElement).files;
    const base64Images: string[] = [];

    if (files && files.length > 0) {
      let loaded = 0;
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = () => {
          base64Images.push(reader.result as string);
          loaded++;
          if (loaded === files.length) {
            this.employeeForm.get('image')?.setValue(base64Images);
            this.imagePreviewList = base64Images;
          }
        };
        reader.readAsDataURL(files[i]);
      }
    } else {
      this.employeeForm.get('image')?.setValue([]);
      this.imagePreviewList = [];
    }
  }

  removeImage(index: number, fileInput: HTMLInputElement) {
    this.imagePreviewList.splice(index, 1)
    // If no images are left, trigger validation
    if (this.imagePreviewList.length === 0) {
      this.employeeForm.get('image')?.markAsTouched();
    }
  }

  clearImageValidator() {
    if (this.imagePreviewList.length > 0) {
      this.employeeForm.controls['image'].clearValidators();
      this.employeeForm.updateValueAndValidity();
    }
  }
  
  onSubmit() {
    this.clearImageValidator();

    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();
      return;
    }

    const formData = { ...this.employeeForm.getRawValue() };

    if (this.isEditEmployee) {
      const index = this.storedEmployeeList.findIndex(e => e.email === formData.email);
      if (index !== -1) {
        formData.image = this.imagePreviewList;
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

    if (this.employeeList[index].image.length > 0) {
      this.imagePreviewList = this.employeeList[index].image;
      this.clearImageValidator();
    }

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
