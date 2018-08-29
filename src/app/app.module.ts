import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ShareModule } from './share/share.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PathNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
