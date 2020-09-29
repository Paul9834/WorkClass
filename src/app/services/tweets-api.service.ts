import { Injectable } from '@angular/core';
import {Tweet} from '../../models/tweet.model';

@Injectable({
  providedIn: 'root'
})
export class TweetsAPIService {

  listaTweetsService: Array<Tweet>;

  constructor() {
    this.listaTweetsService = new Array<Tweet>();
  }

  traerTweets(): Array<Tweet> {
    const tweet = new Tweet();
    tweet.id = 1;
    tweet.author = 'Kevin Montealegre';
    tweet.device = 'iPhone 11';
    tweet.location = 'Bogotá';
    tweet.date = new Date();
    tweet.text = 'My firts tweet...';
    this.listaTweetsService.push(tweet);
    return this.listaTweetsService;
  }
}
