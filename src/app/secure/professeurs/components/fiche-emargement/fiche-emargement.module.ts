import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FicheEmargementRoutingModule } from './fiche-emargement-routing.module';
import { FicheEmargementComponent } from './fiche-emargement.component';
import { ProfesseursModule } from '../../professeurs.module';
import { SharedModule } from 'src/app/secure/shared/shared.module';


@NgModule({
  declarations: [
    FicheEmargementComponent
  ],
  imports: [
    CommonModule,
    FicheEmargementRoutingModule,
    ProfesseursModule,
    SharedModule
  ]
})
export class FicheEmargementModule { }
