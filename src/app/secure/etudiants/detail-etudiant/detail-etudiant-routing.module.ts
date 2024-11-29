import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailEtudiantComponent } from './detail-etudiant.component';

const routes: Routes = [
  { path: '', redirectTo: 'ficheRenseignement', pathMatch: 'full' },
  { path: 'ficheRenseignement', loadChildren: () => import('./components/fiche-renseignement/fiche-renseignement.module').then(m => m.FicheRenseignementModule) },
  { path: 'parcoursEleve', loadChildren: () => import('./components/parcours-eleve/parcours-eleve.module').then(m => m.ParcoursEleveModule) },
  { path: 'bulletinNote', loadChildren: () => import('./components/bulletin-note/bulletin-note.module').then(m => m.BulletinNoteModule) },
  { path: 'changementClasse', loadChildren: () => import('./components/changement-classe/changement-classe.module').then(m => m.ChangementClasseModule) },
  { path: 'changementNiveau', loadChildren: () => import('./components/changement-niveau/changement-niveau.module').then(m => m.ChangementNiveauModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailEtudiantRoutingModule { }
