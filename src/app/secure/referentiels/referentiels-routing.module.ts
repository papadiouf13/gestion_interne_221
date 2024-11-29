import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferentielsComponent } from './referentiels.component';

const routes: Routes = [{ path: '', component: ReferentielsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferentielsRoutingModule { }
