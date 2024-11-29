import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContratsRoutingModule } from './contrats-routing.module';
import { ContratsComponent } from './contrats.component';
import { ProfesseursModule } from '../../professeurs.module';


@NgModule({
  declarations: [
    ContratsComponent
  ],
  imports: [
    CommonModule,
    ContratsRoutingModule,
    ProfesseursModule
  ]
})
export class ContratsModule { }
