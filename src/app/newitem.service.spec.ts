/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NewitemService } from './newitem.service';

describe('NewitemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewitemService]
    });
  });

  it('should ...', inject([NewitemService], (service: NewitemService) => {
    expect(service).toBeTruthy();
  }));
});
