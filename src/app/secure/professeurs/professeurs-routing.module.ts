import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfesseursComponent } from './professeurs.component';

const routes: Routes = [
  { path: '',redirectTo: 'ficheEmargement',  pathMatch: 'full' },
  { path: 'ficheEmargement', loadChildren: () => import('./components/fiche-emargement/fiche-emargement.module').then(m => m.FicheEmargementModule) },
  { path: 'sessions', loadChildren: () => import('./components/sessions/sessions.module').then(m => m.SessionsModule) },
  { path: 'informations', loadChildren: () => import('./components/informations/informations.module').then(m => m.InformationsModule) },
  { path: 'moduleEnseigne', loadChildren: () => import('./components/module-enseigne/module-enseigne.module').then(m => m.ModuleEnseigneModule) },
  { path: 'contrats', loadChildren: () => import('./components/contrats/contrats.module').then(m => m.ContratsModule) },
  { path: 'sesClasses', loadChildren: () => import('./components/ses-classes/ses-classes.module').then(m => m.SesClassesModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesseursRoutingModule { }
