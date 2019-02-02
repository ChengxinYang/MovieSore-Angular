import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GenreComponent } from './genre/genre.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesDetailsComponent } from './movies/movies-details.component';
import { CastComponent } from './casts/cast/cast.component';
import { LoginComponent } from './login/login.component';
import { MymoviesComponent } from './movies/mymovies.component';
import { AuthenticationGuard } from './services/authentication.guard';

const routes: Routes = [
  {path:'', component : HomeComponent},
  {path:'genre', component : GenreComponent},
  {path:'movies', component : MoviesComponent},
  {path:'login', component: LoginComponent},
  {path:'movies/nowplaying', component : MoviesComponent},
  {path:'movies/upcoming', component : MoviesComponent},
  {path:'movies/toprated', component : MoviesComponent},
  {path:'movies/popular', component : MoviesComponent},
  {path:'movies/:page', component : MoviesComponent},
  {path:'movie/:id', component : MoviesDetailsComponent},
  {path:'movies/genre/:id', component : MoviesComponent},
  {path:'movies/cast/:castId', component : MoviesComponent},
  {path:'cast', component : CastComponent},
  {path:'movies/credits/:movieId', component: CastComponent},
  {path:'mymovies', component: MymoviesComponent, canActivate:[AuthenticationGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
