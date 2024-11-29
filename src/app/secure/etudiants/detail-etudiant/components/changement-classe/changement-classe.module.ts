import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangementClasseRoutingModule } from './changement-classe-routing.module';
import { ChangementClasseComponent } from './changement-classe.component';
import { DetailEtudiantModule } from '../../detail-etudiant.module';


@NgModule({
  declarations: [
    ChangementClasseComponent
  ],
  imports: [
    CommonModule,
    ChangementClasseRoutingModule,
    DetailEtudiantModule
  ]
})
export class ChangementClasseModule { }
