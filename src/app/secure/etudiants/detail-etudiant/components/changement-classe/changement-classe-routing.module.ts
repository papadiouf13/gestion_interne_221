import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangementClasseComponent } from './changement-classe.component';

const routes: Routes = [{ path: '', component: ChangementClasseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangementClasseRoutingModule { }
