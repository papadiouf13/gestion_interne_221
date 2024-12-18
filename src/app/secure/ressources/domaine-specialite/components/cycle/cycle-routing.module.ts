import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CycleComponent } from './cycle.component';

const routes: Routes = [{ path: '', component: CycleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CycleRoutingModule { }
