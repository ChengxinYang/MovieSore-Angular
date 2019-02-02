import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { Movie } from '../shared/models/movie';
import { NgbTabset, NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: Movie[];
  tabMovies: Movie[];
  private tabSet: ViewContainerRef;

  @ViewChild(NgbTabset) set content(content: ViewContainerRef) {
    this.tabSet = content;
  }

  constructor(private movieService: MoviesService) { }


  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.movieService.getNowPlayingMovies().subscribe(m => {
      this.tabMovies = m;
    });
  }

  showMore(x) {
    console.log('Show More Clicked');
    // console.log(x);
  }

  selectedTab(tab: NgbTabChangeEvent) {
    switch (tab.nextId) {
      case 'comingSoontab': {
        this.movieService.getUpcomingMovies().subscribe(m => {
          this.tabMovies = m;
          console.log(this.tabMovies);
        });
        break;
      }
      case 'newTrailerstab': {
        this.movieService.getNowPlayingMovies().subscribe(m => {
          this.tabMovies = m;
          console.log(this.tabMovies);
        });
        break;
      }
      case 'topRatedtab': {
        this.movieService.getTopMovies().subscribe(m => {
          this.tabMovies = m;
          console.log(this.tabMovies);
        });
        break;
      }
      case 'populartab': {
        this.movieService.getPopularMovies().subscribe(m => {
          this.tabMovies = m;
          console.log(this.tabMovies);
        });
        break;
      }
      case 'theatertab': {
        this.movieService.getNowPlayingMovies().subscribe(m => {
          this.tabMovies = m;
          console.log(this.tabMovies);
        });
        break;
      }
      default:{
        break;
      }
    }
  }

  ngOnInit() {
    this.movieService.getNowPlayingMovies().subscribe(m => {
      this.movies = m;
    });
  }

}
