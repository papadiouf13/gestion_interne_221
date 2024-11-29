import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomaineSpecialiteRoutingModule } from './domaine-specialite-routing.module';
import { DomaineSpecialiteComponent } from './domaine-specialite.component';
import { RessourcesModule } from '../ressources.module';


@NgModule({
  declarations: [
    DomaineSpecialiteComponent
  ],
  imports: [
    CommonModule,
    DomaineSpecialiteRoutingModule,
    RessourcesModule
  ],
  exports:[
    DomaineSpecialiteComponent
  ]
})
export class DomaineSpecialiteModule { }
