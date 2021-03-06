import { Component, OnInit } from '@angular/core';
import { GenreService } from '../services/genre.service';
import { Genre } from '../shared/models/genre';


@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  genres : Genre[];

  constructor(private genreService : GenreService ) { }

  ngOnInit() {
    this.genreService.getAllGerne().subscribe(g => {
      this.genres = g;
    });
  }
}
