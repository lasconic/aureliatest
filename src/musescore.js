import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class MuseScore{
  heading = 'MuseScore';
  images = [];
  url = 'http://api.musescore.com/services/rest/score.jsonp?oauth_consumer_key=musichackday2014';

  constructor(http){
    this.http = http;
  }

  activate(){
    return this.http.jsonp(this.url, 'callback').then(response => {
      console.log("test")
      console.log(response.content)
      //this.images.append("https://s3.amazonaws.com/static.musescore.com/197146/546ecc839f/thumb.png?nocache=1437557738")
      for (let score of response.content) {
        console.log(score["id"])
        var u = "http://static.musescore.com/" + score["id"] + "/" + score["secret"] + "/" + "thumb.png"
        console.log(u)
        this.images.push({"url":u});
      }
    });
  }
}
