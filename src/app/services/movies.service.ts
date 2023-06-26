import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiKey = '8957f5f8f34a49441a27c556adb5a068';

  constructor() {}

  async getTopRatedMovies(): Promise<any> {
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}`;
    const response = await fetch(url);
    return await response.json();
  }
}
