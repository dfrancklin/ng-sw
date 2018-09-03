import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareModule } from '../share/share.module';

import { FilmsRoutingModule } from './films-routing.module';
import { FilmsListComponent } from './films-list/films-list.component';

@NgModule({
  imports: [
    CommonModule,
    FilmsRoutingModule,
    ShareModule
  ],
  declarations: [FilmsListComponent]
})
export class FilmsModule { }
