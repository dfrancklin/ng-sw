import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarshipsRoutingModule } from './starships-routing.module';
import { StarshipsListComponent } from './starships-list/starships-list.component';

@NgModule({
  imports: [
    CommonModule,
    StarshipsRoutingModule
  ],
  declarations: [StarshipsListComponent]
})
export class StarshipsModule { }
