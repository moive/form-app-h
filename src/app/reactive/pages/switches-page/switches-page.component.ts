import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';

@Component({
  templateUrl: './switches-page.component.html',
  styles: [],
})
export class SwitchesPageComponent implements OnInit {
  public myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotifications: [true, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue],
  });

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorsService
  ) {}

  ngOnInit(): void {
    this.myForm.reset(this.person);
  }

  person = {
    gender: 'F',
    wantNotifications: true,
  };
  onSave(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    const { termsAndConditions, ...newPerson } = this.myForm.value;

    this.person = newPerson;
    console.log(this.myForm.value);
    console.log(this.person);
  }

  isValidField(field: string): boolean | null {
    return this.validatorService.isValidField(this.myForm, field);
  }
}
