import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationsRoutingModule } from './informations-routing.module';
import { InformationsComponent } from './informations.component';
import { ProfesseursModule } from '../../professeurs.module';


@NgModule({
  declarations: [
    InformationsComponent
  ],
  imports: [
    CommonModule,
    InformationsRoutingModule,
    ProfesseursModule
  ]
})
export class InformationsModule { }
