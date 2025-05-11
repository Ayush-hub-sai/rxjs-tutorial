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
  imagePreviewList: string[] = [];

  isAddEmployee = false;
  isEditEmployee = false;

  employeeForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loadEmployeeList();
    this.searchValue.valueChanges.subscribe(() => this.filterEmployeeList());
  }

  private loadEmployeeList(): void {
    const data = localStorage.getItem('employeeList');
    this.storedEmployeeList = data ? JSON.parse(data) : [];
    this.employeeList = [...this.storedEmployeeList];
  }

  private saveEmployeeList(): void {
    localStorage.setItem('employeeList', JSON.stringify(this.storedEmployeeList));
    this.employeeList = [...this.storedEmployeeList];
  }

  private initEmployeeForm(): void {
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      image: [[], Validators.required]
    });
  }

  toggleAddEmployeeForm(): void {
    this.isAddEmployee = !this.isAddEmployee;
    this.isEditEmployee = false;

    if (this.isAddEmployee) {
      this.initEmployeeForm();
      // this.imagePreviewList = [];
    } else {
      this.employeeForm?.reset();
    }
  }

  onFileSelected(event: Event): void {
    const files = (event.target as HTMLInputElement).files;
    if (!files?.length) {
      this.setImages([]);
      return;
    }

    const base64Images: string[] = [];
    let loaded = 0;

    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onload = () => {
        base64Images.push(reader.result as string);
        loaded++;
        if (loaded === files.length) {
          this.setImages(base64Images);
        }
      };
      reader.readAsDataURL(file);
    });
  }

  private setImages(images: string[]): void {
    this.employeeForm.get('image')?.setValue(images);
    this.imagePreviewList = images;
    this.updateImageValidator();
  }

  removeImage(index: number): void {
    this.imagePreviewList.splice(index, 1);
    this.setImages([...this.imagePreviewList]);
  }

  private updateImageValidator(): void {
    const imageControl = this.employeeForm.get('image');
    if (this.imagePreviewList.length) {
      imageControl?.clearValidators();
    } else {
      imageControl?.setValidators(Validators.required);
      alert("Please at least one image.")
    }
    imageControl?.updateValueAndValidity();
  }

  submitForm(): void {
    this.updateImageValidator();

    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();
      return;
    }

    const formData = { ...this.employeeForm.getRawValue(), image: this.imagePreviewList };

    if (this.isEditEmployee) {
      const index = this.storedEmployeeList.findIndex(e => e.email === formData.email);
      if (index !== -1) {
        this.storedEmployeeList[index] = formData;
      }
    } else {
      this.storedEmployeeList.push(formData);
    }

    this.saveEmployeeList();
    this.resetForm();
  }

  resetForm(): void {
    this.isAddEmployee = false;
    this.isEditEmployee = false;
    this.imagePreviewList = [];
    this.employeeForm.reset();
    this.employeeForm.get('email')?.enable();
  }

  editEmployee(index: number): void {
    this.isAddEmployee = true;
    this.isEditEmployee = true;
    this.initEmployeeForm();

    const employee = this.employeeList[index];
    this.employeeForm.patchValue({ ...employee, image: [] });
    this.imagePreviewList = employee.image || [];
    this.employeeForm.get('email')?.disable();
    this.updateImageValidator();
  }

  deleteEmployee(index: number): void {
    this.storedEmployeeList.splice(index, 1);
    this.saveEmployeeList();
  }

  filterEmployeeList(): void {
    const search = this.searchValue.value?.toLowerCase() || '';
    this.employeeList = this.storedEmployeeList.filter(e =>
      ['firstName', 'lastName', 'email', 'phone'].some(key =>
        e[key]?.toLowerCase().includes(search)
      )
    );
  }
}
