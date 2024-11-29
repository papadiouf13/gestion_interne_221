import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UeRoutingModule } from './ue-routing.module';
import { UeComponent } from './ue.component';
import { UeModuleModule } from '../../ue-module.module';
import { SharedModule } from 'src/app/secure/shared/shared.module';


@NgModule({
  declarations: [
    UeComponent
  ],
  imports: [
    CommonModule,
    UeRoutingModule,
    UeModuleModule,
    SharedModule
  ]
})
export class UeModule { }
