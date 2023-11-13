import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {
  canBeStride,
  emailPattern,
  firstNameAndLastnamePattern,
} from '../../../shared/validations/validatots';

@Component({
  templateUrl: './register-page.component.html',
  styles: [],
})
export class RegisterPageComponent {
  public myForm: FormGroup = this.fb.group({
    name: [
      '',
      [Validators.required, Validators.pattern(firstNameAndLastnamePattern)],
    ],
    email: ['', [Validators.required, Validators.pattern(emailPattern)]],
    username: ['', [Validators.required, canBeStride]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  isValidField(field: string) {
    // TODO: get validatins from service provider
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }
}
