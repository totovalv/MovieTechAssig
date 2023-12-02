// wishlist.service.ts
import { Injectable } from '@angular/core';
import { Movie } from 'src/interfaces/movie.model';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishlistKey = 'wishlist';

  constructor() {}

  getWishlist(): Movie[] {
    const wishlistString = localStorage.getItem(this.wishlistKey);
    return wishlistString ? JSON.parse(wishlistString) : [];
  }

  addToWishlist(movie: Movie): void {
    const wishlist = this.getWishlist();
    if (!wishlist.some((m: Movie) => m.id === movie.id)) {
      wishlist.push(movie);
      localStorage.setItem(this.wishlistKey, JSON.stringify(wishlist));
    }
  }

  removeFromWishlist(movieId: string): void {
    const wishlist = this.getWishlist().filter((m: Movie) => m.id !== movieId);
    localStorage.setItem(this.wishlistKey, JSON.stringify(wishlist));
  }

  isInWishlist(movieId: string): boolean {
    return this.getWishlist().some((m: Movie) => m.id === movieId);
  }

  isWishlistEmpty(): boolean {
    return this.getWishlist().length === 0;
  }
}
