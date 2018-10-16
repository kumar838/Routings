import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchService } from '../search.service';
/* import { from } from 'rxjs';
import { filter } from 'rxjs/operators'; */
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private loading:boolean = false;
  constructor(
    private itunes:SearchService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { 
    this.activatedRoute.params.subscribe(params => {          
      //console.log(params);
      if(params['term']) {
        this.doSearch(params['term']);
      }
    });
  }

  doSearch(term: String) {
    this.loading = true;
    // commenting please remove commemts
    //this.itunes.search(term).then(_ => (this.loading = false));
  }

  onSearch(term: String) {
    this.router.navigate(["search", { term:term}]);
  }

  ngOnInit() {
  }

}