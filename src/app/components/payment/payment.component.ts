import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {

  cardForm!: FormGroup;
  cardType: string = 'Unknown';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cardForm = this.fb.group({
      cardHolderName: ['', [Validators.required, Validators.minLength(3)]],
      cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
      expiryDate: ['', [Validators.required, this.expiryDateValidator]],
      cvv: ['', [Validators.required, Validators.pattern('^[0-9]{3,4}$')]]
    });

    this.cardForm.get('cardNumber')?.valueChanges.subscribe(value => {
      this.cardType = this.getCardType(value);
    });
  }

  getCardType(cardNumber: string): string {
    const num = cardNumber.replace(/\D/g, '');

    if (/^4\d{12}(\d{3})?$/.test(num)) return 'Visa';

    if (/^(5[1-5][0-9]{14})$/.test(num) || /^(2[2-7][0-9]{14})$/.test(num))
      return 'MasterCard';

    if (/^3[47]/.test(num)) return 'Amex';

    if (/^6(?:011|5[0-9]{2})[0-9]{12}$/.test(num)) return 'Discover';

    if (/^(508[0-9]{12})$|^(60[0-9]{14})$|^(65[0-9]{14})$|^(652[1-2][0-9]{12})$/.test(num))
      return 'RuPay';

    return 'Unknown';
  }

  expiryDateValidator(control: any) {
    const value = control.value;
    if (!value || !/^\d{2}\/\d{2}$/.test(value)) return { invalidDate: true };

    const [month, year] = value.split('/').map(Number);

    if (month < 1 || month > 12) return { invalidMonth: true };

    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;

    if (year < currentYear || (year === currentYear && month < currentMonth)) {
      return { expired: true };
    }

    return null;
  }

  onSubmit(): void {
    if (this.cardForm.valid) {
      alert(`Card Type: ${this.cardType}\nCard Number: ${this.cardForm.value.cardNumber}`);
    } else {
      this.cardForm.markAllAsTouched();
    }
  }
}
