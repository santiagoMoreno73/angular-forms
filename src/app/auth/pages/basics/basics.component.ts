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
    name: [, [Validators.required, Validators.minLength(3)]],
    price: [, [Validators.required, Validators.min(0)]],
    stock: [, [Validators.required, Validators.min(0)]],
  });

  constructor(private fb: FormBuilder) {}

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

  fieldNoValid(field: string) {
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
    this.myForm.reset();
  }
}
