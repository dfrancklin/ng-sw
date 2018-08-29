import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs/internal/Rx';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit, OnDestroy {

  isCollapsed = true;
  subscription: Subscription;

  constructor(private router: Router) {}

  toggleNav() {
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit() {
    this.subscription = this.router.events.subscribe(event => {
      this.isCollapsed = true;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
