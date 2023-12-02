import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from 'src/components/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from 'src/components/header/header.component';
import { FormsModule } from '@angular/forms';
import { MovieCardComponent } from '../components/movie-card/movie-card.component';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from 'src/components/movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,HomeComponent,HeaderComponent, MovieCardComponent,MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
