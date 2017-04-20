import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as d3 from 'd3';

@Injectable()
export class MapLoaderService {

  constructor(private http: Http) { }

  // Load map from fs
  loadMap() {
    return this.http.get('./src/assets/data/maps/e_coli_core.Core metabolism.json')    
      .map(res => res.json());
  }
}