import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css'],
})
export class BasicsComponent implements OnInit {
  // myForm: FormGroup = new FormGroup({
  //   name: new FormControl('RTX-4080I'),
  //   price: new FormControl(1500),
  //   stock: new FormControl(5),
  // });

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    stock: [0, [Validators.required, Validators.min(0)]],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // it is not mandatory to wait for the same form object
    this.myForm.reset({
      name: 'RTX-4080I',
      price: 1500,
    });

    // it is mandatory to wait for the same form object
    // this.myForm.setValue({
    //   name: 'RTX-4080I',
    //   price: 1500,
    //   stock: 12
    // })
  }

  public fieldNoValid(field: string) {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  public getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case "required":
          return "This field is required.";
        case "minlength":
          return `Min ${errors['minlength'].requiredLength} caracters.`;
      }
    }

    return null;
  }

  public saveForm() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log('form', this.myForm.value);
    this.myForm.reset();
  }
}
