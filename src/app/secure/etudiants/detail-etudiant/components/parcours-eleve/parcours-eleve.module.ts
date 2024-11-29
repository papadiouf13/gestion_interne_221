import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParcoursEleveRoutingModule } from './parcours-eleve-routing.module';
import { ParcoursEleveComponent } from './parcours-eleve.component';
import { DetailEtudiantModule } from '../../detail-etudiant.module';


@NgModule({
  declarations: [
    ParcoursEleveComponent
  ],
  imports: [
    CommonModule,
    ParcoursEleveRoutingModule,
    DetailEtudiantModule
  ]
})
export class ParcoursEleveModule { }
