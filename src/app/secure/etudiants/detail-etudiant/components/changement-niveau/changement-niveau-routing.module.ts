import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangementNiveauComponent } from './changement-niveau.component';

const routes: Routes = [{ path: '', component: ChangementNiveauComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangementNiveauRoutingModule { }
