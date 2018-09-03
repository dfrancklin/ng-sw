import { isObject } from 'rxjs/internal-compatibility';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-common',
  templateUrl: './list-common.component.html',
  styleUrls: ['./list-common.component.css']
})
export class ListCommonComponent implements OnInit, OnDestroy {

  @Input() fields: any;
  @Input() observable: Observable<any>;

  @Output() prevHandler: EventEmitter<any> = new EventEmitter();
  @Output() nextHandler: EventEmitter<any> = new EventEmitter();

  header: any;

  constructor() { }

  ngOnInit() {
    this.header = Object.keys(this.fields);
  }

  ngOnDestroy() { }

  prevPage() {
    this.prevHandler.emit();
  }

  nextPage() {
    this.nextHandler.emit();
  }

  isObject(obj) {
    return typeof obj === 'object';
  }

}
