import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FicheRenseignementRoutingModule } from './fiche-renseignement-routing.module';
import { FicheRenseignementComponent } from './fiche-renseignement.component';
import { DetailEtudiantModule } from '../../detail-etudiant.module';


@NgModule({
  declarations: [
    FicheRenseignementComponent,
  ],
  imports: [
    CommonModule,
    FicheRenseignementRoutingModule,
    DetailEtudiantModule
  ]
})
export class FicheRenseignementModule { }
