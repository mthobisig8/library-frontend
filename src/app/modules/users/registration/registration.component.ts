import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
  constructor(private formBuilder: FormBuilder) {}
  registrationForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [Validators.required, Validators.pattern(this.passwordRegex)],
    ],
  });

  // get
  getEmail() {
    return this.registrationForm.get('email');
  }

  getPassword() {
    return this.registrationForm.get('password');
  }

  onSubmit() {
    console.log(this.getPassword()?.valid);
  }
}
