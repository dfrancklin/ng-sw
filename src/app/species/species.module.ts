import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeciesRoutingModule } from './species-routing.module';
import { SpeciesListComponent } from './species-list/species-list.component';

@NgModule({
  imports: [
    CommonModule,
    SpeciesRoutingModule
  ],
  declarations: [SpeciesListComponent]
})
export class SpeciesModule { }
