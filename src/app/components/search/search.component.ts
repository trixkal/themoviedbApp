import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search = '';

  moviesResult: any;
  constructor(public moviesService: MoviesService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      if (params.textRouter) {
        this.search = params.textRouter;

        this.searchMovie();
      }
    });
  }

  ngOnInit(): void {
    this.searchMovie();
  }

  searchMovie(  ) {
    if (this.search.length === 0) {
      return;
    }
    this.moviesService.searchMovie(this.search)
    .subscribe(resp => {
      console.log(resp);
      this.moviesResult = resp;
    });
  }
}
