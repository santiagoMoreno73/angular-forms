import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css'],
})
export class DynamicComponent {
  myForm: FormGroup = this.fb.group({
    name: [, [Validators.required, Validators.minLength(3)]],
  });

  constructor(private fb: FormBuilder) {}

  fieldInvalid(field: string) {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }
  saveForm() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log('form', this.myForm.value);
  }
}
