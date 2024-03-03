import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register-page/register-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'sign-up', component: RegisterComponent },
      { path: '**', redirectTo: 'sign-up' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class AuthRoutingModule { }
