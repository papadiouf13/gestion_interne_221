import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FicheRenseignementComponent } from './fiche-renseignement.component';

const routes: Routes = [{ path: '', component: FicheRenseignementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FicheRenseignementRoutingModule { }
