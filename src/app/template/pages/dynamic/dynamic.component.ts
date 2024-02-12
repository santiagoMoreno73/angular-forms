import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Person {
  name: string;
  favorites: Favorite[];
}

interface Favorite {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
})
export class DynamicComponent {
  newGame: string = '';
  person: Person = {
    name: 'Santiago',
    favorites: [
      {
        id: 1,
        name: 'Metal Gear',
      },
      {
        id: 2,
        name: 'Forza Horizont',
      },
    ],
  };

  constructor() {}

  addGame() {
    const newFavorite: Favorite = {
      id: this.person.favorites.length + 1,
      name: this.newGame,
    };

    this.person.favorites.push({ ...newFavorite });
    this.newGame = '';
  }

  deleteGame(index: number) {
    this.person.favorites.splice(index, 1);
  }

  saveForm(myForm: NgForm) {
    console.log('here', myForm);
  }
}
