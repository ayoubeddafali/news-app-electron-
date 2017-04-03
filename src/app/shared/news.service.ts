import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class NewsService {
  

    constructor(private http:Http) {}

    getNewsForSpecificChannel(channel){
          let baseurl:string = `https://newsapi.org/v1/articles?source=${channel}&apiKey=acef61956a9146d7b58a539de54bb35f`
        return this.http.get(baseurl).toPromise()
    }
}