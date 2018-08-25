import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isCollapsed = true;
  @ViewChild('nav') navContainer: ElementRef;

  constructor() {
    console.log(this.navContainer);
  }

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }

}
