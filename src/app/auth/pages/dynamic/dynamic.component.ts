import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css'],
})
export class DynamicComponent {
  myForm: FormGroup = this.fb.group({
    name: [, [Validators.required, Validators.minLength(3)]],
    favorites: this.fb.array(
      [
        ['Metal Gear', Validators.required],
        ['Death Standing', Validators.required],
      ],
      Validators.required
    ),
  });

  newFavorite: FormControl = new FormControl();

  get favoritesArr() {
    return this.myForm.get('favorites') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  addFavorite() {
    if (this.newFavorite.invalid) {
      return;
    }

    // It can be done like this or like this with form builder but control must always be passed
    // this.favoritesArr.push(
    //   new FormControl(this.newFavorite.value, Validators.required)
    // );

    this.favoritesArr.push(
      this.fb.control(this.newFavorite.value, Validators.required)
    );

    this.newFavorite.reset();
  }

  deleteField(index: number){
    this.favoritesArr.removeAt(index);
  }

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
