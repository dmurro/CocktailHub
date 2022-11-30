import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDrinkComponent } from './card-drink.component';

describe('CardDrinkComponent', () => {
  let component: CardDrinkComponent;
  let fixture: ComponentFixture<CardDrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDrinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
