import { Injectable } from '@angular/core';
import { SearchItem } from './search-item.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchService {
  apiRoot: string = "https://itunes.apple.com/search";
  results: SearchItem[] = null;
  constructor(private http:HttpClient) { }

  search(term: String) {
    return new Promise((resolve, reject) => {
      this.results = [];
      let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;

      this.http
        .jsonp(apiURL, "callback")
        .toPromise()
        .then(
          res => {
            //success
            this.results = res['results'].map(item => {
              return new SearchItem(
                item.trackName,
                item.artistName,
                item.trackViewUrl,
                item.artworkUrl30,
                item.artistId
              );
            });
            resolve();
          },
          
          msg => {
            //Error
            reject(msg);
          }
        );
    });
  }
}