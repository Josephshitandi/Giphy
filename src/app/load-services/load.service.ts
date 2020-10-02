import { Injectable } from '@angular/core';
//import { Giphy } from '../giphy';
import { HttpClient } from '@angular/common/http';
import { Load } from '../load';

@Injectable({
  providedIn: 'root'
})
export class LoadService {
  loads: Load[] = [];

  loadService(){
    let endPoint = `https://api.giphy.com/v1/gifs/random?api_key=MHLo3ZDYuWeJyFh2q6tVxnrRfaVIECGl&tag=&rating=g`
    let promise = new Promise((resolve, reject) => {
      this.http.get(endPoint).toPromise().then((results) => {
          for (let i = 0; i < results['data'].length; i++) {
            let imageUrl = results['data'][i]['images']['original']['url'];
            let load = new Load(imageUrl);
            this.loads.push(load);
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
