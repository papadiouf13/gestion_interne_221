import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnneeScolRoutingModule } from './annee-scol-routing.module';
import { AnneeScolComponent } from './annee-scol.component';
import { AnneeScolaireModule } from '../../annee-scolaire.module';
import { SharedModule } from 'src/app/secure/shared/shared.module';


@NgModule({
  declarations: [
    AnneeScolComponent
  ],
  imports: [
    CommonModule,
    AnneeScolRoutingModule,
    AnneeScolaireModule,
    SharedModule
  ]
})
export class AnneeScolModule { }
