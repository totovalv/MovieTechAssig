// home.component.ts
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { Movie } from 'src/interfaces/movie.model';
import { SearchServiceService } from 'src/services/search-service/search-service.service';
import { WishlistService } from 'src/services/wishlist-service/wishlist.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  originalMovieData = this.searchService.movieData;
  movieData: Movie[] = this.originalMovieData.slice();
  currentSort:
  | 'titleAz'
    | 'titleZa'
    | 'releaseDateOl'
    | 'releaseDateNw'
    | 'wishlist'
    | '' = '';
    releaseSortToggle: boolean = false;
    isHome: boolean = false;
    currentURL: string;
  isMoviePath: boolean = false;
  sortsAtTop:boolean=false
  
  constructor(
    private location: Location,
    public searchService: SearchServiceService,
    public wishlistService: WishlistService,
    private router: Router
  ) {
    this.currentURL = '';
  }
  ngOnInit() {
    this.currentURL = this.location.path();
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.originalMovieData = this.searchService.movieData;
        this.applyFilterAndSort(this.originalMovieData);

        const storedTitleFilter = localStorage.getItem(
          this.searchService.localStorageKey
        );
        if (storedTitleFilter) {
          this.searchService.filterByTitle(storedTitleFilter);
        }

        this.searchService.filteredMovies$.subscribe((filteredMovies) => {
          this.movieData = filteredMovies;
        });

   
        this.isHome = this.currentURL === '/'?true:false;
        this.isMoviePath= this.currentURL.startsWith('/movie/')
  
        
      });
  }
  toggleSorts(): boolean {
    this.sortsAtTop = !this.sortsAtTop;
    console.log(this.sortsAtTop);
    return this.sortsAtTop;
  }

  applyFilterAndSort(data: Movie[]) {
    const titleFilter = this.searchService.currentTitleFilter;
    let filteredData = titleFilter
      ? data.filter((movie) =>
          movie.title.toLowerCase().includes(titleFilter.toLowerCase())
        )
      : data;
  
    switch (this.currentSort) {
      case 'titleAz':
        filteredData.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'titleZa':
        filteredData.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'releaseDateOl':
        filteredData.sort(
          (a, b) =>
            new Date(a.releaseDate).getTime() -
            new Date(b.releaseDate).getTime()
        );
        break;
      case 'releaseDateNw':
        filteredData.sort(
          (a, b) =>
            new Date(b.releaseDate).getTime() -
            new Date(a.releaseDate).getTime()
        );
        break;
      case 'wishlist':
        filteredData = filteredData.filter((movie) =>
          this.wishlistService.isInWishlist(movie.id)
        );
        break;
    }
  
    this.searchService.updateFilteredMovies(filteredData);
  }
  
  sortByTitleAz() {
    this.currentSort = 'titleAz';
    this.applyFilterAndSort(this.originalMovieData);
  }

  sortByTitleZa() {
    this.currentSort = 'titleZa';
    this.applyFilterAndSort(this.originalMovieData);
  }

  sortByReleaseDateOldest() {
    this.currentSort = 'releaseDateOl';
    this.applyFilterAndSort(this.originalMovieData);
  }

  sortByReleaseDateNewest() {
    this.currentSort = 'releaseDateNw';
    this.applyFilterAndSort(this.originalMovieData);
  }

  sortByWishlist() {
    this.currentSort = 'wishlist';
    this.applyFilterAndSort(this.originalMovieData);
  }

  clearSort() {
    this.currentSort = '';
    this.applyFilterAndSort(this.originalMovieData);
  }
  isWishlistEmpty(): boolean {
    return this.currentSort === 'wishlist' && this.movieData.length === 0;
  }

  isSortActive(
    sortType:
      | 'titleAz'
      | 'titleZa'
      | 'releaseDateOl'
      | 'releaseDateNw'
      | 'wishlist'
      | ''
  ): boolean {
    return this.currentSort === sortType;
  }
}
