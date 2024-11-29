import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametreRoutingModule } from './parametre-routing.module';
import { ParametreComponent } from './parametre.component';
import { RessourcesModule } from '../ressources.module';


@NgModule({
  declarations: [
    ParametreComponent
  ],
  imports: [
    CommonModule,
    ParametreRoutingModule,
    RessourcesModule
  ],
  exports: [
    ParametreComponent,
    
  ]
})
export class ParametreModule { }
