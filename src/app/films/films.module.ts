import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { FilmsListComponent } from './films-list/films-list.component';

@NgModule({
  imports: [
    CommonModule,
    FilmsRoutingModule
  ],
  declarations: [FilmsListComponent]
})
export class FilmsModule { }
