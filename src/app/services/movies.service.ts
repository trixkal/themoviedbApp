import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apikey = '0cd44a3a9ec696d0e4f133e66ab9dad5';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  moviesResult: any[] = [];

  constructor(public http: HttpClient) { }

  getPopularMovies() {

    const url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=en`;
    return this.http.get <any>(url)
          .pipe(
            map( (resp: any) => {
              //this.nextPageToken = data.nextPageToken;
              const movies: any[] = [];
              for (const movie of resp.results) {
                // let movieToReturn: Movie;
                // movieToReturn.popularity = movie.popularity;
                // movieToReturn.title = movie.title;
                movies.push(movie);
              }

              return movies;
            })
          );
  }

  getRRatedMovies() {
    
    const url =
     // tslint:disable-next-line: max-line-length
     `${ this.urlMoviedb }/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&api_key=${ this.apikey }&language=en`;
    return this.http.get(url)
          .pipe(
            map( (resp: any) => resp.results)
          );
  }

  get2013Movies() {
    
    const url =
    `${ this.urlMoviedb }/discover/movie?primary_release_year=2018&sort_by=popularity.desc&api_key=${ this.apikey }&language=en`;
    return this.http.get(url)
          .pipe(
            map( (resp: any) => resp.results)
          );
  }

  searchMovie( searchTerm ) {

    const url = `${ this.urlMoviedb }/search/movie?query=${ searchTerm }&sort_by=popularity.desc&api_key=${ this.apikey }&language=en`;

    return this.http.get( url )
      .pipe(
        map((resp: any) => resp.results
        ));
  }

  getMove(id: string) {

    const url = `${ this.urlMoviedb }/movie/${ id }?api_key=${ this.apikey }&language=en`;

    return this.http.get( url )
      .pipe(
        map((resp: any) => resp));
  }

}
