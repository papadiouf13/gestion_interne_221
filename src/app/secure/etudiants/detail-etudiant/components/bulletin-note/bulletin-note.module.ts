import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BulletinNoteRoutingModule } from './bulletin-note-routing.module';
import { BulletinNoteComponent } from './bulletin-note.component';
import { DetailEtudiantModule } from '../../detail-etudiant.module';


@NgModule({
  declarations: [
    BulletinNoteComponent
  ],
  imports: [
    CommonModule,
    BulletinNoteRoutingModule,
    DetailEtudiantModule
  ]
})
export class BulletinNoteModule { }
