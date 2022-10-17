import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Datacluster } from '../_common/datacluster';

@Injectable({
  providedIn: 'root'
})
export class DatacallService {
  URL = "https://api.data.gov.in/resource/9f323c79-ffeb-4ba3-b0c4-88b6cf9e1e89?api-key=579b464db66ec23bdd000001dc53dec48c7e45c4558b0a1d29b7b155&format=json&limit=1000";
  constructor(private http: HttpClient) { }

  getAllDataFromServer() {
    return this.http.get<Datacluster>(this.URL, { responseType: 'json' });
  }
}
