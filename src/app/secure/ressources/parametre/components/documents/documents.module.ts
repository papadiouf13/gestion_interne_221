import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsRoutingModule } from './documents-routing.module';
import { DocumentsComponent } from './documents.component';
import { ParametreModule } from '../../parametre.module';
import { SharedModule } from 'src/app/secure/shared/shared.module';


@NgModule({
  declarations: [
    DocumentsComponent
  ],
  imports: [
    CommonModule,
    DocumentsRoutingModule,
    ParametreModule,
    SharedModule
  ]
})
export class DocumentsModule { }
