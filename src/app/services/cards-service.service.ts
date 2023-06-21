import { Injectable } from '@angular/core';
import { Card } from '../interfaces/card';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  commonHeaders = {
    'Content-Type': 'application/json',
    Accept: '*/*',
  };
  url = 'http://localhost:3000';

  constructor() {}

  async getAllCards(): Promise<Card[]> {
    return (await (await fetch(`${this.url}/cards`)).json()) ?? [];
  }

  async postCard(card: Card): Promise<boolean> {
    const result = await fetch(`${this.url}/cards`, {
      method: 'POST',
      headers: this.commonHeaders,
      body: JSON.stringify(card),
    });
    return result.ok;
  }

  async putCard(card: Card): Promise<boolean> {
    const result = await fetch(`${this.url}/cards/${card.id}`, {
      method: 'PUT',
      headers: this.commonHeaders,
      body: JSON.stringify(card),
    });
    return result.ok;
  }

  async deleteCard(cardId: number): Promise<boolean> {
    const result = await fetch(`${this.url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this.commonHeaders,
    });
    return result.ok;
  }
}
