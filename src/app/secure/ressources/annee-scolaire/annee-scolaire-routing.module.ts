import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnneeScolaireComponent } from './annee-scolaire.component';

const routes: Routes = [
  { path: '', redirectTo: 'anneeScol', pathMatch: 'full' },
  { path: 'anneeScol', loadChildren: () => import('./components/annee-scol/annee-scol.module').then(m => m.AnneeScolModule) },
  { path: 'suiviEvenement', loadChildren: () => import('./components/suivi-evenement/suivi-evenement.module').then(m => m.SuiviEvenementModule) },
  { path: 'calendrierGeneral', loadChildren: () => import('./components/calendrier-general/calendrier-general.module').then(m => m.CalendrierGeneralModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnneeScolaireRoutingModule { }
