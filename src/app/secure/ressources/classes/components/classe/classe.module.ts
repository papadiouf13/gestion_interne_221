import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasseRoutingModule } from './classe-routing.module';
import { ClasseComponent } from './classe.component';
import { ClassesModule } from '../../classes.module';
import { SharedModule } from 'src/app/secure/shared/shared.module';


@NgModule({
  declarations: [
    ClasseComponent
  ],
  imports: [
    CommonModule,
    ClasseRoutingModule,
    ClassesModule,
    SharedModule
  ]
})
export class ClasseModule { }
