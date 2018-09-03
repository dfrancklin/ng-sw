import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

import { tap } from 'rxjs/operators';
import { map } from 'rxjs/internal/operators';

import { Film } from './film.model';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  private readonly API = `${environment.API}/films`;
  // private readonly API = `${environment.API}/people`;

  constructor(private http: HttpClient) { }

  list(page: number) {
    let url = this.API;

    if (page) {
      url = `${url}/?page=${page}`;
    }

    return this.http.get<Film[]>(url);
  }

}
