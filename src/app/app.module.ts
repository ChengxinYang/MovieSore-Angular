import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { NgProgressModule } from '@ngx-progressbar/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header.component';
import { ContactUsComponent } from './shared/components/contact-us.component';
import { NotFoundComponent } from './shared/components/not-found.component';
import { GenreComponent } from './genre/genre.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesDetailsComponent } from './movies/movies-details.component';
import { MoviesCreateComponent } from './movies/movies-create.component';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { GenreCreateComponent } from './genre/genre-create.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { CastComponent } from './casts/cast/cast.component';
import { LoginComponent } from './login/login.component';
import { MymoviesComponent } from './movies/mymovies.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactUsComponent,
    NotFoundComponent,
    GenreComponent,
    HomeComponent,
    MoviesComponent,
    MoviesDetailsComponent,
    MoviesCreateComponent,
    GenreCreateComponent,
    CastComponent,
    LoginComponent,
    MymoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgProgressModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
