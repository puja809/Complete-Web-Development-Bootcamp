import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Datacluster } from '../_common/datacluster';

@Injectable({
  providedIn: 'root'
})
export class DatacallService {
  URL = "https://api.data.gov.in/resource/bbfa6042-ec2e-4c28-8135-6fc7b3e4c39c?api-key=579b464db66ec23bdd000001dc53dec48c7e45c4558b0a1d29b7b155&format=json&limit=1000";
  constructor(private http: HttpClient) { }

  getAllDataFromServer() {
    return this.http.get<Datacluster>(this.URL, { responseType: 'json' });
  }
}
