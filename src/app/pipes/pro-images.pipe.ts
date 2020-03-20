import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'proImages'
})
export class ProImagesPipe implements PipeTransform {

  transform(movie: any, poster: boolean = false): any {
    const url = 'https://image.tmdb.org/t/p/w1000_and_h563_face/';

    if (poster) {
      return url + movie.poster_path;
    }

    if (movie == null) {
      console.log('null');
      return 'assets/noimage4.svg';
    }
    if (movie.backdrop_path) {
      return url + movie.backdrop_path;
    } else {
      if (movie.poster_path) {
        return url + movie.poster_path;
      } else {
        return 'assets/noimage4.svg';
      }
    }
    return null;
  }

}
