import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register-page/register-page.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    imports: [CommonModule, AuthRoutingModule, FormsModule, ReactiveFormsModule],
    declarations: [
        RegisterComponent
    ],
    exports: [RegisterComponent]
})
export class AuthModule { }
