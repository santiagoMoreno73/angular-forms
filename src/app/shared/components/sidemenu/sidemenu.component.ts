import { Component } from '@angular/core';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class SidemenuComponent {
  public templateMenu: MenuItem[] = [
    {
      title: 'Basics',
      route: './template/basics',
    },
    {
      title: 'Dynamics',
      route: './template/dynamics',
    },
    {
      title: 'Switches',
      route: './template/switches',
    },
  ];

  public reactiveMenu: MenuItem[] = [
    {
      title: 'Basics',
      route: './reactive/basics',
    },
    {
      title: 'Dynamics',
      route: './reactive/dynamics',
    },
    {
      title: 'Switches',
      route: './reactive/switches',
    },
  ];


  public authMenu: MenuItem[] = [
    {
      title: 'Register',
      route: './auth',
    }
  ];
}
