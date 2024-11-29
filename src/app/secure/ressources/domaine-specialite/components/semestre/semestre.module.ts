import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SemestreRoutingModule } from './semestre-routing.module';
import { SemestreComponent } from './semestre.component';
import { DomaineSpecialiteModule } from '../../domaine-specialite.module';
import { SharedModule } from 'src/app/secure/shared/shared.module';


@NgModule({
  declarations: [
    SemestreComponent
  ],
  imports: [
    CommonModule,
    SemestreRoutingModule,
    DomaineSpecialiteModule,
    SharedModule
  ]
})
export class SemestreModule { }
