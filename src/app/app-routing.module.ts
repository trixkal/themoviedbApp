import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [
  {path: 'movies', component: MoviesComponent},
  {path: 'movie/:id/:callPage', component: MovieComponent},
  {path: 'movie/:id/:callPage/:textRouter', component: MovieComponent},
  {path: 'search', component: SearchComponent},
  {path: 'search/:textRouter', component: SearchComponent},
  {path: '**', pathMatch: 'full', redirectTo: '/movies'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
