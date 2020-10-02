import { Component, OnInit } from '@angular/core';
import { Giphy } from '../giphy';
import { Load } from '../load'
import { LoadService } from '../load-services/load.service';
import { SearchService } from '../search-services/search.service';
import { TrendingService } from '../trending-services/trending.service'

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {
  giphys: Giphy[];
  loads: Load[];

  constructor(public trendingServices: TrendingService, public searchService: SearchService, public loadMore: LoadService) { }

  getTrending(){
    this.trendingServices.getTrendingGiphy().then(() => {
        this.giphys = this.trendingServices.giphys;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  searchGiphys(term: string){
    this.searchService.searchGiphy(term).then(
      () => {
        this.giphys = this.searchService.giphys;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  loadGiphy(){
    this.loadMore.loadService().then(() => {
        this.loads = this.loadMore.loads;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
this.getTrending();
this.loadGiphy()
  }

}
