import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuiviEvenementComponent } from './suivi-evenement.component';

const routes: Routes = [{ path: '', component: SuiviEvenementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuiviEvenementRoutingModule { }
