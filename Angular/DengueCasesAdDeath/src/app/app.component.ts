import { Component } from '@angular/core';
import { Datacluster } from './_common/datacluster';
import { DatacallService } from './_services/datacall.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DengueCasesAdDeath';
  constructor(private service: DatacallService) { } 
  _dataCluster: Datacluster; 
  displayedColumns: string[] = ['sl_no','State/UT','2018 cases','2018 deaths','2019 cases','2019 deaths','2020 cases','2020 deaths','2021 prov till 21st Nov cases','2021 prov till 21st Nov deaths'];    
  
  ngOnInit() {
    this.service.getAllDataFromServer().subscribe( 
        data => {
          console.log(data);
          this._dataCluster = data;
          this._dataCluster.records = this._dataCluster.records.slice(2,this._dataCluster.records.length);
        },
        error=>console.log("unable to fetch data cluster")
      );
  }
}
