import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { TemplateModule } from '../template/template.module';

@NgModule({
  declarations: [SidemenuComponent],
  exports: [SidemenuComponent, TemplateModule],
  imports: [CommonModule, RouterModule],
})
export class SharedModule { }
