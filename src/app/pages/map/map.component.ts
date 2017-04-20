import { Component, OnInit } from '@angular/core';
import { MapLoaderService } from '../../services/map-loader.service';


@Component({
  selector: 'metamap-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  mapData: any;

  constructor(private mapLoader: MapLoaderService) { }

  ngOnInit() {
    // Retrieve posts from the MapLoader Service
    this.mapLoader.loadMap().subscribe(data => {
      this.mapData = data;
      console.log("Map data recieved", data);
    });
  }

}
