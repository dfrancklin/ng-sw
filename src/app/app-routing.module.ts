import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'films', loadChildren: './films/films.module#FilmsModule' },
  { path: 'people', loadChildren: './people/people.module#PeopleModule' },
  { path: 'planets', loadChildren: './planets/planets.module#PlanetsModule' },
  { path: 'species', loadChildren: './species/species.module#SpeciesModule' },
  { path: 'starships', loadChildren: './starships/starships.module#StarshipsModule' },
  { path: 'vehicles', loadChildren: './vehicles/vehicles.module#VehiclesModule' },
  { path: '**', pathMatch: 'full', component: PathNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
