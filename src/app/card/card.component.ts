import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../interfaces/card';
import { CardsService } from '../services/cards-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() card!: Card;
  @Input() setCardToEdit!: (card: Card) => void;
  moviesImagesBaseUrl: string = 'https://image.tmdb.org/t/p/w500';
  isEdittingModeEnabled: boolean = false;

  constructor(private cardsService: CardsService) {}

  deleteCard() {
    this.cardsService.deleteCard(this.card.id!).then((result) => {
      if (result) location.reload();
    });
  }
}
