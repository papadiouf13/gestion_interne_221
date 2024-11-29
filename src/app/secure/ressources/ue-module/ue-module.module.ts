import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UeModuleRoutingModule } from './ue-module-routing.module';
import { UeModuleComponent } from './ue-module.component';
import { RessourcesModule } from '../ressources.module';


@NgModule({
  declarations: [
    UeModuleComponent
  ],
  imports: [
    CommonModule,
    UeModuleRoutingModule,
    RessourcesModule
  ],
  exports:[
    UeModuleComponent
  ]
})
export class UeModuleModule { }
