import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassesRoutingModule } from './classes-routing.module';
import { ClassesComponent } from './classes.component';
import { RessourcesModule } from '../ressources.module';


@NgModule({
  declarations: [
    ClassesComponent
  ],
  imports: [
    CommonModule,
    ClassesRoutingModule,
    RessourcesModule
  ],
  exports:[
    ClassesComponent
  ]
})
export class ClassesModule { }
