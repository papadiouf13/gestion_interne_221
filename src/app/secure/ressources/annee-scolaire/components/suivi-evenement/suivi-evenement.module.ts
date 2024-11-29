import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuiviEvenementRoutingModule } from './suivi-evenement-routing.module';
import { SuiviEvenementComponent } from './suivi-evenement.component';
import { AnneeScolaireModule } from '../../annee-scolaire.module';
import { SharedModule } from 'src/app/secure/shared/shared.module';


@NgModule({
  declarations: [
    SuiviEvenementComponent
  ],
  imports: [
    CommonModule,
    SuiviEvenementRoutingModule,
    AnneeScolaireModule,
    SharedModule

  ]
})
export class SuiviEvenementModule { }
