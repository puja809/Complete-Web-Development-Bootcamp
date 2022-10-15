import { Component } from '@angular/core';
import { Datacluster } from './_common/datacluster';
import { DatacallService } from './_services/datacall.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StatusOfComputerizationOfLandRecords';
  constructor(private service: DatacallService) { } 
  _dataCluster: Datacluster; 
  // displayedColumns: string[] = ['sl_no','State/UT','Computerization of Registration','E-Stamping','Integration of Land Records_and Registration'];    
  
  ngOnInit() {
    this.service.getAllDataFromServer().subscribe( 
        data => {
          console.log(data);
          this._dataCluster = data;
        },
        error=>console.log("unable to fetch data cluster")
      );
  }
}
