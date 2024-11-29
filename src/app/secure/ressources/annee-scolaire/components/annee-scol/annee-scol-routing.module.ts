import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnneeScolComponent } from './annee-scol.component';

const routes: Routes = [{ path: '', component: AnneeScolComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnneeScolRoutingModule { }
