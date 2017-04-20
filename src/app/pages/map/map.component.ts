import { Component, OnInit } from '@angular/core';
import { MapLoaderService } from '../../services/map-loader.service';


@Component({
  selector: 'metamap-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  mapInfo: any = {};
  mapData: any = {};

  constructor(private mapLoader: MapLoaderService) { }

  ngOnInit() {

    // Retrieve posts from the MapLoader Service
    this.mapLoader.loadMap().subscribe(payload => {
      this.mapInfo = payload[0];
      this.mapData = payload[1];
      console.log("This is the map info", this.mapInfo);   
      console.log("This is the map data", this.mapData);
    });

  }

}
