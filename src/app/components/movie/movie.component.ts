import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {


  movie: any;
  backTo = '';
  searchTerm = '';
  constructor(public moviesService: MoviesService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
console.log(params.callPage);
      this.backTo = params.callPage;
      if (params.textRouter) {
        this.searchTerm = params.textRouter;
      }
      this.moviesService.getMove(params.id).subscribe(resp => {
         console.log(resp);
         this.movie = resp;

      });

    });
  }


  ngOnInit(): void {
  }

}
