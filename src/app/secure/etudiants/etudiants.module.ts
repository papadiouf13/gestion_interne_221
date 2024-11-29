import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantsRoutingModule } from './etudiants-routing.module';
import { EtudiantsComponent } from './etudiants.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    EtudiantsComponent
  ],
  imports: [
    CommonModule,
    EtudiantsRoutingModule,
    SharedModule
  ],
  exports:[
    EtudiantsComponent
  ]
})
export class EtudiantsModule { }
