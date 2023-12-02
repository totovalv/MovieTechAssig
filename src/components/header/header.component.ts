import { Component } from '@angular/core';
import { SearchServiceService } from 'src/services/search-service/search-service.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  searchTitle: string = '';
  isHome: boolean = false;
  currentURL: string;
  sortsAtTop: boolean = false;
  isMoviePath: boolean = false;
  constructor(
    public searchService: SearchServiceService,
    private location: Location,
    private router: Router
  ) {
    this.currentURL = '';
  }

  ngOnInit() {
    this.currentURL = this.location.path();
    this.isHome = this.currentURL === '' ? true : false;
    this.isMoviePath = this.currentURL.startsWith('/movie/') ? true : false;
  }
  toggleSorts(): boolean {
    this.sortsAtTop = !this.sortsAtTop;
    console.log(this.sortsAtTop)
    return this.sortsAtTop;
  }
  
  onSearchInputChange(event: Event) {
    this.searchTitle = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
  }
  navigateHome() {
    this.router.navigate(['']);
  }

  searchByTitle(title: string | null) {
    if (title !== null) {
      this.searchService.filterByTitle(title);
      this.searchTitle = '';
    } else {
      this.searchService.filterByTitle(this.searchTitle);
    }
  }
}
