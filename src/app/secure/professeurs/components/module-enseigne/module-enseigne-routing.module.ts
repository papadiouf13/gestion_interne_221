import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleEnseigneComponent } from './module-enseigne.component';

const routes: Routes = [{ path: '', component: ModuleEnseigneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleEnseigneRoutingModule { }
