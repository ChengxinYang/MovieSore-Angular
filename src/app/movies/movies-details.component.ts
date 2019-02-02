import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/models/movie';
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { Credits } from '../shared/models/credit';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent implements OnInit {
  movie : Movie;
  id : number;
  credits : Credits;
  photo = 'http://image.tmdb.org/t/p/original//mhdeE1yShHTaDbJVdWyTlzFvNkr.jpg';


  constructor(private movieService : MoviesService, private route : ActivatedRoute ) { }

  ngOnInit() {
    this.route.params.subscribe(parmas => {
      this.id = parmas["id"];
      if(this.id > 0){
        this.movieService.getMovieById(this.id).subscribe(m => {
          this.movie = m;
        });
        
        this.movieService.getMovieCreditsByMovie(this.id).subscribe(c => {
          this.credits = c;
        })
      }
    });
  }
}
