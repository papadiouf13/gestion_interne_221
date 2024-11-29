import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SousClasseRoutingModule } from './sous-classe-routing.module';
import { SousClasseComponent } from './sous-classe.component';
import { ClassesModule } from '../../classes.module';
import { SharedModule } from 'src/app/secure/shared/shared.module';


@NgModule({
  declarations: [
    SousClasseComponent
  ],
  imports: [
    CommonModule,
    SousClasseRoutingModule,
    ClassesModule,
    SharedModule
  ]
})
export class SousClasseModule { }
