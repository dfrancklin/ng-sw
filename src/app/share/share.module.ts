import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TopNavComponent } from './top-nav/top-nav.component';
import { ItemNavComponent } from './item-nav/item-nav.component';
import { ListCommonComponent } from './list-common/list-common.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ItemNavComponent,
    ListCommonComponent,
    TopNavComponent,
  ],
  exports: [
    ItemNavComponent,
    ListCommonComponent,
    TopNavComponent,
  ]
})
export class ShareModule { }
