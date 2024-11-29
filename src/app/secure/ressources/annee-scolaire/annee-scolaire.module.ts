import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnneeScolaireRoutingModule } from './annee-scolaire-routing.module';
import { AnneeScolaireComponent } from './annee-scolaire.component';
import { RessourcesModule } from '../ressources.module';


@NgModule({
  declarations: [
    AnneeScolaireComponent
  ],
  imports: [
    CommonModule,
    AnneeScolaireRoutingModule,
    RessourcesModule
  ],exports: [
    AnneeScolaireComponent
  ]
})
export class AnneeScolaireModule { }
