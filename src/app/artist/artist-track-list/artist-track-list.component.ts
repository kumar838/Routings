import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-artist-track-list',
  templateUrl: './artist-track-list.component.html',
  styleUrls: ['./artist-track-list.component.css']
})
export class ArtistTrackListComponent implements OnInit {
  private loading:boolean = true;
  private tracks: any[];
  constructor(private activatedRoute:ActivatedRoute, private http:HttpClient) {
    this.activatedRoute.parent.params.subscribe(params => {

      this.http
        .jsonp(
          `https://itunes.apple.com/lookup?id=${
            params["artistId"]
          }&entity=song`,
          "callback"
        )
        .toPromise()
        .then(res => {
          this.loading = false;
          console.log(res);
          this.tracks = res['results'].slice(1);
        });
  
    });
   }

  ngOnInit() {
  }

}