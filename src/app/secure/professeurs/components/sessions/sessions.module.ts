import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionsRoutingModule } from './sessions-routing.module';
import { SessionsComponent } from './sessions.component';
import { ProfesseursModule } from '../../professeurs.module';


@NgModule({
  declarations: [
    SessionsComponent
  ],
  imports: [
    CommonModule,
    SessionsRoutingModule,
    ProfesseursModule
  ]
})
export class SessionsModule { }
