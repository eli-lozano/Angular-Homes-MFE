import { Injectable } from '@angular/core';
import { HousingLocation } from 'src/app/housing-location';
import { MockListings } from 'src/assets/mocks/listing-mocks';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  protected housingLocationList: HousingLocation[] = MockListings;

  constructor() { }

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: Number): HousingLocation | undefined {
    return this.housingLocationList.find((housingLocation) => housingLocation.id === id);
  }
}
