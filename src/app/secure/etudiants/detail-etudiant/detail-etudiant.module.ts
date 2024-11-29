import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailEtudiantRoutingModule } from './detail-etudiant-routing.module';
import { DetailEtudiantComponent } from './detail-etudiant.component';


@NgModule({
  declarations: [
    DetailEtudiantComponent
  ],
  imports: [
    CommonModule,
    DetailEtudiantRoutingModule,
  ],
  exports: [
    DetailEtudiantComponent
  ]
})
export class DetailEtudiantModule { }
