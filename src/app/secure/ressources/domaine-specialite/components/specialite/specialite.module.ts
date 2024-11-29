import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialiteRoutingModule } from './specialite-routing.module';
import { SpecialiteComponent } from './specialite.component';
import { DomaineSpecialiteModule } from '../../domaine-specialite.module';
import { SharedModule } from 'src/app/secure/shared/shared.module';


@NgModule({
  declarations: [
    SpecialiteComponent
  ],
  imports: [
    CommonModule,
    SpecialiteRoutingModule,
    DomaineSpecialiteModule,
    SharedModule
  ]
})
export class SpecialiteModule { }
