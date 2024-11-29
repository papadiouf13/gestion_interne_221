import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomaineRoutingModule } from './domaine-routing.module';
import { DomaineComponent } from './domaine.component';
import { DomaineSpecialiteModule } from '../../domaine-specialite.module';
import { SharedModule } from 'src/app/secure/shared/shared.module';


@NgModule({
  declarations: [
    DomaineComponent
  ],
  imports: [
    CommonModule,
    DomaineRoutingModule,
    DomaineSpecialiteModule,
    SharedModule
  ]
})
export class DomaineModule { }
