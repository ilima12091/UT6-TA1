import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../interfaces/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card!: Card;
  @Input() setCardToEdit!: (card: Card) => void;
  moviesImagesBaseUrl: string = 'https://image.tmdb.org/t/p/w500';
  isEdittingModeEnabled: boolean = false;

  constructor() {}

  ngOnInit() {}
}
