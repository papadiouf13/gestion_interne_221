import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from './classes.component';

const routes: Routes = [
  { path: '', redirectTo: 'classe', pathMatch: 'full' },
  { path: 'classe', loadChildren: () => import('./components/classe/classe.module').then(m => m.ClasseModule) },
  { path: 'sousClasse', loadChildren: () => import('./components/sous-classe/sous-classe.module').then(m => m.SousClasseModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassesRoutingModule { }
