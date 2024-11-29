import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HoraireComponent } from './horaire.component';

const routes: Routes = [{ path: '', component: HoraireComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HoraireRoutingModule { }
