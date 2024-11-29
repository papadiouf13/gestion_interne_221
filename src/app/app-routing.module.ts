import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './public/layout/components/connexion/connexion.component';
import { AccueilComponent } from './public/layout/components/accueil/accueil.component';

const routes: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {path: 'accueil', component: AccueilComponent},
  { path: 'ressources', loadChildren: () => import('./secure/ressources/ressources.module').then(m => m.RessourcesModule) },
  { path: 'inscriptionReinscriptions', loadChildren: () => import('./secure/inscription-reinscriptions/inscription-reinscriptions.module').then(m => m.InscriptionReinscriptionsModule) },
  { path: 'referentiels', loadChildren: () => import('./secure/referentiels/referentiels.module').then(m => m.ReferentielsModule) },
  { path: 'planning', loadChildren: () => import('./secure/planning/planning.module').then(m => m.PlanningModule) },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'professeurs', loadChildren: () => import('./secure/professeurs/professeurs.module').then(m => m.ProfesseursModule) },
  { path: 'etudiants', loadChildren: () => import('./secure/etudiants/etudiants.module').then(m => m.EtudiantsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
