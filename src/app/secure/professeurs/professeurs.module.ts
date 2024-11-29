import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesseursRoutingModule } from './professeurs-routing.module';
import { ProfesseursComponent } from './professeurs.component';


@NgModule({
  declarations: [
    ProfesseursComponent
  ],
  imports: [
    CommonModule,
    ProfesseursRoutingModule
  ],
  exports:[
    ProfesseursComponent
  ]
})
export class ProfesseursModule { }
