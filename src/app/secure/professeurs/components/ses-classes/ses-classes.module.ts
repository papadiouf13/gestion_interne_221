import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SesClassesRoutingModule } from './ses-classes-routing.module';
import { SesClassesComponent } from './ses-classes.component';
import { ProfesseursModule } from '../../professeurs.module';
import { SharedModule } from 'src/app/secure/shared/shared.module';


@NgModule({
  declarations: [
    SesClassesComponent
  ],
  imports: [
    CommonModule,
    SesClassesRoutingModule,
    ProfesseursModule,
    SharedModule
  ]
})
export class SesClassesModule { }
