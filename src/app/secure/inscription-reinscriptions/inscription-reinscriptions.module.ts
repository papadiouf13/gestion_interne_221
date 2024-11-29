import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscriptionReinscriptionsRoutingModule } from './inscription-reinscriptions-routing.module';
import { InscriptionReinscriptionsComponent } from './inscription-reinscriptions.component';
import { SharedModule } from '../shared/shared.module';
import { EtudiantsModule } from '../etudiants/etudiants.module';
import { EtudiantsComponent } from '../etudiants/etudiants.component';


@NgModule({
  declarations: [
    InscriptionReinscriptionsComponent
  ],
  imports: [
    CommonModule,
    InscriptionReinscriptionsRoutingModule,
    SharedModule,
    EtudiantsModule
  ]
})
export class InscriptionReinscriptionsModule { }
