import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CiviliteComponent } from './civilite.component';

const routes: Routes = [{ path: '', component: CiviliteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CiviliteRoutingModule { }
