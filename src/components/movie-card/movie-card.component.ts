// movie-card.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/interfaces/movie.model';
import { SearchServiceService } from 'src/services/search-service/search-service.service';
import { WishlistService } from 'src/services/wishlist-service/wishlist.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  originalMovieData = this.searchService.movieData;
  movieData: Movie[] = this.originalMovieData.slice();

  constructor(
    public searchService: SearchServiceService,
    public wishlistService: WishlistService,  private router: Router
  ) {}

  ngOnInit() {
    this.originalMovieData = this.searchService.movieData;
    this.searchService.filteredMovies$.subscribe(filteredMovies => {
      this.movieData = filteredMovies;
    });
  }

  toggleWishlist(movie: Movie) {
    if (this.wishlistService.isInWishlist(movie.id)) {
      this.wishlistService.removeFromWishlist(movie.id);
    } else {
      this.wishlistService.addToWishlist(movie);
    }
  }
  navigateToMovieDetail(movieId: string) {
    this.router.navigate(['/movie', movieId]);
  }
}
