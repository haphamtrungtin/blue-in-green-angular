import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  readonly address = `103BIS VÕ THỊ SÁU, P.6, Q.3, TP.HCM`
  readonly phone = `0931136621`;
  readonly email = `INFO@BLUEINGREEN.COM.VN`;

  @ViewChild('emailInput') emailInput: ElementRef;

  signup(emailInput: HTMLInputElement) {
    if (emailInput.value.trim() === '') {
      emailInput.focus();
    } else {
      // Handle sign up logic
    }
  }
}
