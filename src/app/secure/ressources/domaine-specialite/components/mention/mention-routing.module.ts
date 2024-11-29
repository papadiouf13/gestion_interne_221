import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MentionComponent } from './mention.component';

const routes: Routes = [{ path: '', component: MentionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentionRoutingModule { }
