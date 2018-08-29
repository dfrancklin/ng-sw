import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

import { Observable } from 'rxjs/internal/Rx';

import { FilmsService } from '../films.service';
import { Film } from './../film.model';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {

  films$: Observable<Film[]>;
  currentPage: number;

  constructor(
    private service: FilmsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.films$ = this.service.list(this.currentPage);

    this.route.queryParams.subscribe(params => {
        this.currentPage = params['page'] || 1;
        this.films$ = this.service.list(this.currentPage);
    });
  }

  previousPage() {
    --this.currentPage;

    if (this.currentPage <= 0) {
      this.currentPage = 1;
    }

    this.router.navigate([], {
      queryParams: {
        'page': this.currentPage || 1
      }
    });
  }

  nextPage() {
    this.router.navigate([], { queryParams: { 'page': ++this.currentPage }});
  }

}
