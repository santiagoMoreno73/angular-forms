import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
})
export class BasicsComponent implements OnInit {
  @ViewChild('myform') myForm!: NgForm;
  initForm = {
    product: '',
    price: 0,
    stock: 0,
  };

  constructor() {}

  ngOnInit(): void {}

  nameValid(): boolean {
    return (
      this.myForm?.controls['product']?.invalid &&
      this.myForm?.controls['product']?.touched
    );
  }

  priceValid(): boolean {
    return (
      this.myForm?.controls['price']?.touched &&
      this.myForm?.controls['price']?.value < 0
    );
  }

  saveForm() {
    console.log('form', this.myForm);
    this.myForm.resetForm({
      product: 0,
      stock: 0,
    });
  }
}
