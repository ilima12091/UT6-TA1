import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Card } from '../interfaces/card';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../interfaces/movie';
import { CardsService } from '../services/cards-service.service';

@Component({
  selector: 'app-card-creation-form',
  templateUrl: './card-creation-form.component.html',
  styleUrls: ['./card-creation-form.component.scss'],
})
export class CardCreationFormComponent implements OnInit {
  @Input() card?: Card;
  @Input() closeModal!: () => void;

  movies: Movie[] = [];

  creationForm = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    movieImageUrl: new FormControl(),
  });

  constructor(
    private moviesService: MoviesService,
    private cardsService: CardsService
  ) {}

  ngOnInit() {
    const movieImageUrl = `${this.card?.selectedMovieId}|${this.card?.movieImageUrl}`;
    this.creationForm.setValue({
      title: this.card?.title ?? '',
      description: this.card?.description ?? '',
      movieImageUrl: this.card?.selectedMovieId ? movieImageUrl : '',
    });
    this.loadMovies();
  }

  loadMovies() {
    this.moviesService.getTopRatedMovies().then((data) => {
      this.movies = data.results;
    });
  }

  submitCard() {
    const { title, description } = this.creationForm.value;
    const [selectedMovieId, movieImageUrl] =
      this.creationForm.value.movieImageUrl.split('|');
    let card: Card = {
      title,
      description,
      selectedMovieId,
      movieImageUrl,
    };
    if (!this.card) {
      this.cardsService.postCard(card).then((result) => {
        if (result) location.reload();
      });
    } else {
      card.id = this.card.id;
      this.cardsService.putCard(card).then((result) => {
        if (result) location.reload();
      });
    }
    this.closeModal();
  }
}
