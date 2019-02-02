import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { Cast } from 'src/app/shared/models/cast';
import { CastService } from 'src/app/services/cast.service';
import { Credits } from 'src/app/shared/models/credit';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css']
})
export class CastComponent implements OnInit {
  casts: Cast[];
  id : number;

  page : number = 1;

  constructor(private castService: CastService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params);
      this.id = +params.get("movieId");
      console.log(this.id);
      if(this.id > 0){
        this.getCastsByMovie(this.id);
      }
      else{
        this.getAllCasts();
      }
    });
  }

  getAllCasts(){
    this.castService.getAllCasts().subscribe(c => {
      this.casts = c;
    })
  }

  getCastsByMovie(movieId : number){
    this.castService.getCastsByMovie(movieId).subscribe(c =>{
      this.casts = c.cast;
    })
  }

  pageChanged(event){
    this.page = event;
  }
}
