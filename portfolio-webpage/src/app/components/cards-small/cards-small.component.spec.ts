import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsSmallComponent } from './cards-small.component';

describe('CardsSmallComponent', () => {
  let component: CardsSmallComponent;
  let fixture: ComponentFixture<CardsSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsSmallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
