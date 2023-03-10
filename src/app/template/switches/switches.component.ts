import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
})
export class SwitchesComponent {
  person = {
    genre: 'F',
    notifications: true,
  };

  termsAndConditions: boolean = false;
}
