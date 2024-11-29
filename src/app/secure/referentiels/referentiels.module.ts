import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferentielsRoutingModule } from './referentiels-routing.module';
import { ReferentielsComponent } from './referentiels.component';


@NgModule({
  declarations: [
    ReferentielsComponent
  ],
  imports: [
    CommonModule,
    ReferentielsRoutingModule
  ]
})
export class ReferentielsModule { }
