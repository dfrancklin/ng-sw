import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-nav',
  templateUrl: './item-nav.component.html',
  styleUrls: ['./item-nav.component.css']
})
export class ItemNavComponent implements OnInit {

  @Input() link: any;

  constructor() { }

  ngOnInit() {
  }

}
