import { Component, OnInit } from '@angular/core';
import {Tweet} from '../../models/tweet.model';

@Component({
  selector: 'app-tweets-list',
  templateUrl: './tweets-list.component.html',
  styleUrls: ['./tweets-list.component.css']
})
export class TweetsListComponent implements OnInit {

  listaTweets: Array<Tweet>;

  constructor() {
    this.listaTweets = new Array<Tweet>();
  }

  ngOnInit(): void {
    this.llenarListadeTweets();
  }

  llenarListadeTweets(): void {
    const tweet = new Tweet();
    tweet.id = 1;
    tweet.author = 'Kevin Montealegre';
    tweet.device = 'iPhone 11';
    tweet.location = 'Bogotá';
    tweet.date = new Date();
    this.listaTweets.push(tweet);
  }

}
