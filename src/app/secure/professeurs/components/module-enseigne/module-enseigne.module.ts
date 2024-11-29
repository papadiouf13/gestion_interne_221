import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleEnseigneRoutingModule } from './module-enseigne-routing.module';
import { ModuleEnseigneComponent } from './module-enseigne.component';
import { ProfesseursModule } from '../../professeurs.module';


@NgModule({
  declarations: [
    ModuleEnseigneComponent
  ],
  imports: [
    CommonModule,
    ModuleEnseigneRoutingModule,
    ProfesseursModule
  ]
})
export class ModuleEnseigneModule { }
