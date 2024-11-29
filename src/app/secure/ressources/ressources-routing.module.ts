import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RessourcesComponent } from './ressources.component';

const routes: Routes = [
  { path: '', redirectTo: 'anneeScolaire', pathMatch: 'full' },
  { path: 'classes', loadChildren: () => import('./classes/classes.module').then(m => m.ClassesModule) },
  { path: 'anneeScolaire', loadChildren: () => import('./annee-scolaire/annee-scolaire.module').then(m => m.AnneeScolaireModule) },
  { path: 'domaineSpecialite', loadChildren: () => import('./domaine-specialite/domaine-specialite.module').then(m => m.DomaineSpecialiteModule) },
  { path: 'ueModule', loadChildren: () => import('./ue-module/ue-module.module').then(m => m.UeModuleModule) },
  { path: 'parametre', loadChildren: () => import('./parametre/parametre.module').then(m => m.ParametreModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RessourcesRoutingModule { }
