import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../shared/models/movie';
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {
  movies: Movie[];
  href : string = "";
  gid : number;
  castId : number;
  page : number = 1;
  title : string;
  @Input('genreId') genreId: number;
  @Input('searchTerm') searchTerm: string;
  
  constructor(private movieService: MoviesService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
        if(this.route.snapshot.url.length >= 2){
          this.href = this.route.snapshot.url[1].path;
        }
        console.log(params);
        this.gid = +params.get('id');
        this.page = +params.get('page');
        this.castId = +params.get('castId');
        if(this.page > 0){
          this.getMoviesByPage(this.page);
        }
        else if(this.gid > 0){
          this.getMoviesByGenre(this.gid);
        }
        else if(this.castId > 0){
          this.getMoviesByCast(this.castId);
        }
        else if(this.href === "popular"){
          this.getPopular();
        }
        else if(this.href === "nowplaying"){
          this.getNowPlaying();
        }
        else if(this.href === "upcoming"){
          this.getUpComing();
        }
        else if(this.href === "toprated"){
          this.getTopRated();
        }
        else{
          this.getAllMovies();
        }
    });
  }

  getPopular(){
    this.movieService.getPopularMovies().subscribe(m => {
      this.movies = m;
      console.log(this.movies);
    });
  }

  getNowPlaying(){
    this.movieService.getNowPlayingMovies().subscribe(m => {
      this.movies = m;
      console.log(this.movies);
    });
  }

  getUpComing(){
    this.movieService.getUpcomingMovies().subscribe(m => {
      this.movies = m;
      console.log(this.movies);
    });
  }

  getTopRated(){
    this.movieService.getTopMovies().subscribe(m => {
      this.movies = m;
      console.log(this.movies);
    });
  }

  getAllMovies(){
    this.movieService.getAllMovies().subscribe(m => {
      this.movies = m;
      console.log(this.movies);
    });
  }

  getMoviesByGenre(genreId : number){
    this.movieService.getMoviesByGenre(genreId).subscribe(m => {
      this.movies = m;
      console.log(this.movies);
    });
  }

  getMoviesByPage(page : number){
    this.movieService.getMoviesByPage(page).subscribe(m => {
      this.movies = m;
      console.log(this.movies);
    })
  }

  getMoviesByCast(castId : number){
    this.movieService.getMoviesByCast(castId).subscribe(m => {
      this.movies = m;
      console.log(this.movies);
    })
  }

  pageChanged(event){
    console.log("page changed");
    this.page =event;
  }
}
