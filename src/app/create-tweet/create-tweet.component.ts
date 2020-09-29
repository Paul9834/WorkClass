import { Component, OnInit } from '@angular/core';
import {TweetsAPIService} from '../services/tweets-api.service';
import {Tweet} from '../../models/tweet.model';

@Component({
  selector: 'app-create-tweet',
  templateUrl: './create-tweet.component.html',
  styleUrls: ['./create-tweet.component.css']
})
export class CreateTweetComponent implements OnInit {

  nuevoTweet: Tweet;

  constructor(private tweetsinfoService: TweetsAPIService) {

  }

  ngOnInit(): void {
  }

  creatNuevoTweet(): void {

  }

}
