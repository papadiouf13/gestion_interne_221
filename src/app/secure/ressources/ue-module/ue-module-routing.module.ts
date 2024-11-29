import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UeModuleComponent } from './ue-module.component';

const routes: Routes = [
  { path: '', redirectTo: 'typeUe', pathMatch: 'full' },
  { path: 'typeUe', loadChildren: () => import('./components/type-ue/type-ue.module').then(m => m.TypeUeModule) },
  { path: 'ue', loadChildren: () => import('./components/ue/ue.module').then(m => m.UeModule) },
  { path: 'module', loadChildren: () => import('./components/module/module.module').then(m => m.ModuleModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UeModuleRoutingModule { }
