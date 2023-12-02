// search-service.service.ts
import { Injectable } from '@angular/core';
import { MOVIE_DATA } from 'src/dataSource/data';
import { Movie } from 'src/interfaces/movie.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
  public movieData: Movie[] = MOVIE_DATA;
  private filteredMoviesSubject = new Subject<Movie[]>();
  public filteredMovies$: Observable<Movie[]> = this.filteredMoviesSubject.asObservable();
  public currentTitleFilter: string = '';

  public localStorageKey = 'searchServiceTitleFilter'; // Make it public

  updateFilteredMovies(filteredMovies: Movie[]): void {
    this.filteredMoviesSubject.next(filteredMovies);
  }

  filterByTitle(title: string): void {
    this.currentTitleFilter = title.trim();
    localStorage.setItem(this.localStorageKey, this.currentTitleFilter);

    if (this.currentTitleFilter === '') {
      this.filteredMoviesSubject.next(this.movieData);
    } else {
      const filteredMovies = this.movieData.filter(movie =>
        movie.title.toLowerCase().includes(this.currentTitleFilter.toLowerCase())
      );
      this.filteredMoviesSubject.next(filteredMovies);
    }
  }
}
