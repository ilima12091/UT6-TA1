import { Component, ViewChild, inject } from '@angular/core';
import { CardsService } from '../services/cards-service.service';
import { Card } from '../interfaces/card';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isModalOpen = false;
  private cardsService = inject(CardsService);
  @ViewChild(IonModal) modal!: IonModal;
  edittingCard?: Card;

  cards: Card[] = [];

  constructor() {
    this.cardsService.getAllCards().then((data) => {
      this.cards = data;
    });
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  create() {
    this.modal.dismiss(null, 'create');
  }

  closeModal = () => {
    this.setOpen(false);
    this.edittingCard = undefined;
  };

  setCardToEdit = (card: Card) => {
    this.setOpen(true);
    this.edittingCard = card;
  };

  onWillDismiss() {
    this.closeModal();
  }
}
