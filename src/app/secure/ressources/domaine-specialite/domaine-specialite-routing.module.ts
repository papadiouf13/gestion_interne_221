import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomaineSpecialiteComponent } from './domaine-specialite.component';

const routes: Routes = [
  { path: '', redirectTo: 'domaine', pathMatch: 'full' },
  { path: 'domaine', loadChildren: () => import('./components/domaine/domaine.module').then(m => m.DomaineModule) },
  { path: 'specialite', loadChildren: () => import('./components/specialite/specialite.module').then(m => m.SpecialiteModule) },
  { path: 'cycle', loadChildren: () => import('./components/cycle/cycle.module').then(m => m.CycleModule) },
  { path: 'niveau', loadChildren: () => import('./components/niveau/niveau.module').then(m => m.NiveauModule) },
  { path: 'mention', loadChildren: () => import('./components/mention/mention.module').then(m => m.MentionModule) },
  { path: 'semestre', loadChildren: () => import('./components/semestre/semestre.module').then(m => m.SemestreModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomaineSpecialiteRoutingModule { }
