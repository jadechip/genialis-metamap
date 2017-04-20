import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class MapLoaderService {

  constructor(private http: Http) { }

  // Load map from fs
  loadMap() {

    Observable.forkJoin([
      this.http.get('./src/assets/data/e_coli_core.Core metabolism.json').map(res => res.json()),
      this.http.get('./src/assets/data/reaction_data_iJO1366.json').map(res => res.json()),
      this.http.get('./src/assets/data/iJO1366.json').map(res => res.json())
    ]).subscribe(
      payload => console.log("Results are here!: ", this.storeResults(payload)), 
      error => console.error("ERROR: ", error)
    );

  }

  storeResults(results) {    
  };

}