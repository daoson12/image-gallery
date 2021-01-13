import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http:HttpClient) { }

  Key = "u2mGp1ExgkstyPQBYuJ-fW9ma_4YSuFu7-c5uKvMT5k";
  page = 1;
  per_page = 21;

  getImage() {
    return this.http.get(
      `https://api.unsplash.com/photos/?page=${this.page}&per_page=${this.per_page}&client_id=${this.Key}`
    );
}
}

