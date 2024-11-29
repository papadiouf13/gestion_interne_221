import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvenementRoutingModule } from './evenement-routing.module';
import { EvenementComponent } from './evenement.component';
import { ParametreModule } from '../../parametre.module';
import { SharedModule } from 'src/app/secure/shared/shared.module';


@NgModule({
  declarations: [
    EvenementComponent
  ],
  imports: [
    CommonModule,
    EvenementRoutingModule,
    ParametreModule,
    SharedModule
  ]
})
export class EvenementModule { }
