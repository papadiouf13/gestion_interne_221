import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParametreComponent } from './parametre.component';

const routes: Routes = [
  { path: '', redirectTo: 'evenement', pathMatch: 'full' },
  { path: 'civilite', loadChildren: () => import('./components/civilite/civilite.module').then(m => m.CiviliteModule) },
  { path: 'evenement', loadChildren: () => import('./components/evenement/evenement.module').then(m => m.EvenementModule) },
  { path: 'salles', loadChildren: () => import('./components/salles/salles.module').then(m => m.SallesModule) },
  { path: 'documents', loadChildren: () => import('./components/documents/documents.module').then(m => m.DocumentsModule) },
  { path: 'horaire', loadChildren: () => import('./components/horaire/horaire.module').then(m => m.HoraireModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametreRoutingModule { }
