import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NiveauRoutingModule } from './niveau-routing.module';
import { NiveauComponent } from './niveau.component';
import { DomaineSpecialiteModule } from '../../domaine-specialite.module';
import { SharedModule } from 'src/app/secure/shared/shared.module';


@NgModule({
  declarations: [
    NiveauComponent
  ],
  imports: [
    CommonModule,
    NiveauRoutingModule,
    DomaineSpecialiteModule,
    SharedModule
  ]
})
export class NiveauModule { }
