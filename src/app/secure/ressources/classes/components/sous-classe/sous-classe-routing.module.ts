import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SousClasseComponent } from './sous-classe.component';

const routes: Routes = [{ path: '', component: SousClasseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SousClasseRoutingModule { }
