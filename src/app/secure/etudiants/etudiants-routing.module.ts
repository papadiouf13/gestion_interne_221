import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantsComponent } from './etudiants.component';

const routes: Routes = [{ path: '', component: EtudiantsComponent }, { path: 'detailEtudiant', loadChildren: () => import('./detail-etudiant/detail-etudiant.module').then(m => m.DetailEtudiantModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantsRoutingModule { }
