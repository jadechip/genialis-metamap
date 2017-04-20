import { TestBed, inject } from '@angular/core/testing';

import { MapGeneratorService } from './map-generator.service';

describe('MapGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapGeneratorService]
    });
  });

  it('should ...', inject([MapGeneratorService], (service: MapGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
