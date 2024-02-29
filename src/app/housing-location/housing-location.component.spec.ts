import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HousingLocationComponent } from './housing-location.component';
import { ActivatedRoute, Params, convertToParamMap } from '@angular/router';

describe('HousingLocationComponent', () => {
  let component: HousingLocationComponent;
  let fixture: ComponentFixture<HousingLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HousingLocationComponent],
      providers: [
        {
          provide: ActivatedRoute, useValue: {
            snapshot: { params: { id: 1 } }
          }
        },
      ]
    });
    fixture = TestBed.createComponent(HousingLocationComponent);
    component = fixture.componentInstance;

    component.housingLocation = {
      "id": 0,
      "name": "Acme Fresh Start Housing",
      "city": "Chicago",
      "state": "IL",
      "photo": "/assets/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
      "availableUnits": 4,
      "wifi": true,
      "laundry": true
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
