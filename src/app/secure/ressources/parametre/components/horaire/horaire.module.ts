import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoraireRoutingModule } from './horaire-routing.module';
import { HoraireComponent } from './horaire.component';
import { ParametreModule } from '../../parametre.module';
import { SharedModule } from 'src/app/secure/shared/shared.module';


@NgModule({
  declarations: [
    HoraireComponent
  ],
  imports: [
    CommonModule,
    HoraireRoutingModule,
    ParametreModule,
    SharedModule
  ]
})
export class HoraireModule { }
