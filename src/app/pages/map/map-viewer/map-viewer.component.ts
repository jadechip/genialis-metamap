import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { MapGeneratorService } from '../../../services/map-generator/map-generator.service';
import * as d3 from 'd3';

@Component({
  selector: 'metamap-map-viewer',
  templateUrl: './map-viewer.component.html',
  styleUrls: ['./map-viewer.component.scss']
})
export class MapViewerComponent implements OnInit {

  @Input() mapData;

  constructor(    
    private elementRef: ElementRef,
    private mapGenerator: MapGeneratorService) { }


  ngOnInit() {
    let element = d3.select(this.elementRef.nativeElement).select('#map-container');
    this.mapGenerator.generateMap(element);
  }

}
