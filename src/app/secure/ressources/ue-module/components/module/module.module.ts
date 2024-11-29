import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleRoutingModule } from './module-routing.module';
import { ModuleComponent } from './module.component';
import { UeModuleModule } from '../../ue-module.module';
import { SharedModule } from 'src/app/secure/shared/shared.module';


@NgModule({
  declarations: [
    ModuleComponent
  ],
  imports: [
    CommonModule,
    ModuleRoutingModule,
    UeModuleModule,
    SharedModule
  ]
})
export class ModuleModule { }
