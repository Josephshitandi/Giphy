import { Injectable } from '@angular/core';
import { Giphy } from '../giphy'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {
  giphys: Giphy[] = [];

  getTrendingGiphy(){
    let endPoint = `https://api.giphy.com/v1/gifs/trending?api_key=MHLo3ZDYuWeJyFh2q6tVxnrRfaVIECGl&limit=6&rating=g`
    let promise = new Promise((resolve, reject) => {
      this.http.get(endPoint).toPromise().then((results) => {
          for (let i = 0; i < results['data'].length; i++) {
            let imageUrl = results['data'][i]['images']['original']['url'];
            let giphy = new Giphy(imageUrl);
            this.giphys.push(giphy);
            resolve();
          }
          (error) => {
            console.log(error);
            reject();
          };
        });
    });
    return promise;
  }

  constructor(private http: HttpClient) { }
}
