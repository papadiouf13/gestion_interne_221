import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SesClassesComponent } from './ses-classes.component';

const routes: Routes = [{ path: '', component: SesClassesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SesClassesRoutingModule { }
