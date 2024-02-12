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

  newFavorite: FormControl = new FormControl('', Validators.required);

  get favoritesArr() {
    return this.myForm.get('favorites') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

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

  isValidFieldInArray(formArray: FormArray, index: number) {
    return formArray.controls[index].errors && formArray.controls[index].touched;
  }

  addFavorite(): void {
    if (this.newFavorite.invalid) return;
    const newFavorite = this.newFavorite.value;
    // It can be done like this or like this with form builder but control must always be passed
    // this.favoritesArr.push(new FormControl(newFavorite, Validators.required)// );
    this.favoritesArr.push(this.fb.control(newFavorite, Validators.required));
    this.newFavorite.reset();
  }

  deleteField(index: number): void {
    this.favoritesArr.removeAt(index);
  }

  fieldInvalid(field: string) {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  saveForm(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    (this.myForm.controls["favorites"] as FormArray) = this.fb.array([]);
    this.myForm.reset();
    console.log('form', this.myForm.value);
  }
}
