import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-payment',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {

  cardForm!: FormGroup;
  cardType: string = 'Unknown';

  constructor(
    private fb: FormBuilder,
    private sanitizer: DomSanitizer) { }

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
    // this.loadIframe()
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

  redirectData!: string;
  trustedRedirectData!: SafeHtml;
  loadIframe() {
    this.redirectData = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial; background-color: #fdd3b6; padding: 20px; }
          input, select { margin: 5px 0; padding: 8px; width: 95%; border-radius: 4px; border: 1px solid #ccc; }
          .row { display: flex; gap: 10px; }
          .row > div { flex: 1; }
          button { padding: 10px 20px; background-color: orange; border: none; color: white; border-radius: 4px; margin-top: 10px; cursor: pointer; }
          .error { color: red; font-size: 12px; margin-top: -5px; }
        </style>
        <script>
          function showError(input, message) {
            let error = document.createElement('div');
            error.className = 'error';
            error.textContent = message;
            input.parentElement.appendChild(error);
          }

          function clearErrors() {
            const errors = document.querySelectorAll('.error');
            errors.forEach(e => e.remove());
          }

          function validateForm() {
            clearErrors();
            let isValid = true;

            const requiredFields = [
              { name: 'cardholder', label: 'Cardholder Name' },
              // { name: 'cardnumber', label: 'Card Number' },
              // { name: 'expiry', label: 'Expiry' },
              // { name: 'cvv', label: 'CVV' },
              // { name: 'amount', label: 'Amount' },
              // { name: 'firstname', label: 'First Name' },
              // { name: 'lastname', label: 'Last Name' },
              // { name: 'email', label: 'Email' },
              // { name: 'phone', label: 'Phone' },
              // { name: 'country', label: 'Country' },
              // { name: 'state', label: 'State' },
              // { name: 'zip', label: 'ZIP' },
              // { name: 'address1', label: 'Address Line 1' }
            ];

            requiredFields.forEach(field => {
              const input = document.forms[0][field.name];
              if (!input.value.trim()) {
                showError(input, field.label + ' is required.');
                isValid = false;
              }
            });

            // Extra example: basic email validation
            const email = document.forms[0]['email'].value;
            if (email && !/^[\\w-.]+@([\\w-]+\\.)+[\\w-]{2,4}$/.test(email)) {
              showError(document.forms[0]['email'], 'Invalid email address.');
              isValid = false;
            }

            // Example card number check (must be 16 digits)
            const cardNumber = document.forms[0]['cardnumber'].value;
            if (cardNumber && !/^\\d{16}$/.test(cardNumber)) {
              showError(document.forms[0]['cardnumber'], 'Card number must be 16 digits.');
              isValid = false;
            }

            return isValid;
          }

          function onConfirmPayment(event) {
            event.preventDefault();
            if (validateForm()) {
              document.getElementById('paymentForm').submit();
            } 
            // else {
            //   alert('Please fix the errors before submitting.');
            // }
          }
        </script>
      </head>
      <body>
        <h2>Checkout form</h2>
        <form id="paymentForm" action="https://your-backend-endpoint.com/payment" method="POST" novalidate>
          <div class="row">
            <div><label>Cardholder Name</label><br><input type="text" name="cardholder"></div>
            <div><label>Card Number</label><br><input type="text" name="cardnumber"></div>
          </div>
          <div class="row">
            <div><label>Expiry (MM/YY)</label><br><input type="text" name="expiry"></div>
            <div><label>CVV</label><br><input type="text" name="cvv"></div>
            <div><label>Amount</label><br><input type="text" name="amount"></div>
          </div>
          <div class="row">
            <div><label>First Name</label><br><input type="text" name="firstname"></div>
            <div><label>Last Name</label><br><input type="text" name="lastname"></div>
          </div>
          <div class="row">
            <div><label>Email</label><br><input type="email" name="email"></div>
            <div><label>Phone</label><br><input type="tel" name="phone"></div>
          </div>
          <div class="row">
            <div><label>Country</label><br><input type="text" name="country"></div>
            <div><label>State</label><br><input type="text" name="state"></div>
            <div><label>ZIP</label><br><input type="text" name="zip"></div>
          </div>
          <label>Address Line 1</label><br><input type="text" name="address1">
          <label>Address Line 2</label><br><input type="text" name="address2">
          <br>
          <button type="submit" onclick="onConfirmPayment(event)">Confirm Payment</button>
        </form>
      </body>
      </html>
      `;

   this.trustedRedirectData = this.sanitizer.bypassSecurityTrustHtml(this.redirectData);

  }

  proceedPayment() {
    // window.location.href = '/rxjs-operator';
    this.loadIframe();
  }


}

