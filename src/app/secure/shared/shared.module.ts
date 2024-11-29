// shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectPersonnaliseComponent } from './components/select-personnalise/select-personnalise.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    SelectPersonnaliseComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SelectPersonnaliseComponent,
    PaginationComponent
  ]
})
export class SharedModule { }
