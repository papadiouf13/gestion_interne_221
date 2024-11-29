import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeUeComponent } from './type-ue.component';

const routes: Routes = [{ path: '', component: TypeUeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeUeRoutingModule { }
