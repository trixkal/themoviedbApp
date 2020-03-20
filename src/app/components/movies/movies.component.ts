import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html'
})
export class MoviesComponent implements OnInit {

  popular: any;
  rRated: any;
  movies2013: any;

  constructor(public moviesService: MoviesService) {
    this.moviesService.getPopularMovies()
    .subscribe( data => {
      this.popular = data ;
      // console.log(data);

    });


    this.moviesService.getRRatedMovies()
    .subscribe( resp => {
      console.log(resp);
      this.rRated = resp;
    });

    this.moviesService.get2013Movies()
    .subscribe( resp => {this.movies2013 = resp;
    });

  }
  ngOnInit(): void {




  }


}
