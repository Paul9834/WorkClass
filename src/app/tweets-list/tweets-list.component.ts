import { Component, OnInit } from '@angular/core';
import {Tweet} from '../../models/tweet.model';
import {TweetsAPIService} from '../services/tweets-api.service';

@Component({
  selector: 'app-tweets-list',
  templateUrl: './tweets-list.component.html',
  styleUrls: ['./tweets-list.component.css']
})
export class TweetsListComponent implements OnInit {

  listaTweets: Array<Tweet>;

  constructor(private tweetsService: TweetsAPIService) {
    this.listaTweets = new Array<Tweet>();
  }

  ngOnInit(): void {
    this.llenarListadeTweets();
  }

  llenarListadeTweets(): void {
    this.listaTweets = this.tweetsService.traerTweets();
  }

}
