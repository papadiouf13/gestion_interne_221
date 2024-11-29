import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendrierGeneralComponent } from './calendrier-general.component';

const routes: Routes = [{ path: '', component: CalendrierGeneralComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendrierGeneralRoutingModule { }
