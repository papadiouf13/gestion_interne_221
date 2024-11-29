import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentionRoutingModule } from './mention-routing.module';
import { MentionComponent } from './mention.component';
import { DomaineSpecialiteModule } from '../../domaine-specialite.module';
import { SharedModule } from 'src/app/secure/shared/shared.module';


@NgModule({
  declarations: [
    MentionComponent
  ],
  imports: [
    CommonModule,
    MentionRoutingModule,
    DomaineSpecialiteModule,
    SharedModule
  ]
})
export class MentionModule { }
