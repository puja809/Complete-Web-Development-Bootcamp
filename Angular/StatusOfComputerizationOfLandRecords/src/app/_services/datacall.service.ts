import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Datacluster } from '../_common/datacluster';

@Injectable({
  providedIn: 'root'
})
export class DatacallService {
  URL = "https://api.data.gov.in/resource/ac8e1479-8a0b-41ab-8ef8-f61b47e7cd25?api-key=579b464db66ec23bdd000001dc53dec48c7e45c4558b0a1d29b7b155&format=json&limit=1000";
  constructor(private http: HttpClient) { }

  getAllDataFromServer() {
    return this.http.get<Datacluster>(this.URL, { responseType: 'json' });
  }
}
