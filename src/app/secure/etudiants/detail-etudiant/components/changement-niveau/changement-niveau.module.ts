import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangementNiveauRoutingModule } from './changement-niveau-routing.module';
import { ChangementNiveauComponent } from './changement-niveau.component';
import { DetailEtudiantModule } from '../../detail-etudiant.module';


@NgModule({
  declarations: [
    ChangementNiveauComponent
  ],
  imports: [
    CommonModule,
    ChangementNiveauRoutingModule,
    DetailEtudiantModule
  ]
})
export class ChangementNiveauModule { }
