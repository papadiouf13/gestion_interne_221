import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParcoursEleveComponent } from './parcours-eleve.component';

const routes: Routes = [{ path: '', component: ParcoursEleveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParcoursEleveRoutingModule { }
