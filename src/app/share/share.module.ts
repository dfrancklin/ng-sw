import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TopNavComponent } from './top-nav/top-nav.component';
import { ItemNavComponent } from './item-nav/item-nav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    TopNavComponent,
    ItemNavComponent,
  ],
  exports: [
    TopNavComponent,
    ItemNavComponent,
  ]
})
export class ShareModule { }
