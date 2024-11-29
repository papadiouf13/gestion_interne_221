import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BulletinNoteComponent } from './bulletin-note.component';

const routes: Routes = [{ path: '', component: BulletinNoteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BulletinNoteRoutingModule { }
