// movie-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MOVIE_DATA } from 'src/dataSource/data';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movieId!: string;
  safeTrailerLink: SafeResourceUrl = '';
  movieDetails: any; 
 

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.movieId = params['id'];
      const selectedMovie = MOVIE_DATA.find(movie => movie.id === this.movieId);

      if (selectedMovie) {
        this.movieDetails = selectedMovie;
        this.safeTrailerLink = this.sanitizer.bypassSecurityTrustResourceUrl(selectedMovie.trailerLink);
      }
    });
  }
}
