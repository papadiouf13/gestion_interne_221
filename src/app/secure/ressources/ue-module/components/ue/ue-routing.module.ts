import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UeComponent } from './ue.component';

const routes: Routes = [{ path: '', component: UeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UeRoutingModule { }
