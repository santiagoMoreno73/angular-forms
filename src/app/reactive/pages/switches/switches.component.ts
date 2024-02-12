import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css'],
})
export class SwitchesComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    genre: ['M', Validators.required],
    notifications: [true, Validators.required],
    terms: [false, Validators.requiredTrue],
  });

  person = {
    genre: 'F',
    notifications: true,
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm.reset({ ...this.person, terms: false });

    // see specific change in field form
    // this.myForm.get('terms')?.valueChanges.subscribe((newValue) => {
    //   console.log('newValue', newValue);
    // });

    // see all changes form fields
    this.myForm.valueChanges.subscribe(({ terms, ...restOfArguments }) => {
      this.person = restOfArguments;
    });
  }

  saveForm() {
    if (this.myForm.invalid) {
      return;
    }

    const formValue = { ...this.myForm.value };
    delete formValue.controls['terms'];

    this.person = formValue;
  }
}
