import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-drink',
  templateUrl: './card-drink.component.html',
  styleUrls: ['./card-drink.component.scss'],
})
export class CardDrinkComponent implements OnInit {
  @Input() drinks: any = {
    idDrink: '',
    strDrink: '',
    strDrinkThumb: '',
    strInstructions: '',
  };

  @Input() showButton: boolean = false;

  @Output() handleCartEvent: EventEmitter<number> = new EventEmitter(); //evento

  selected: boolean = false;
  isHover: boolean = false;

  constructor() {}

  handleCardHover(x: boolean) {
    if (this.isHover === false) {
      this.isHover = true;
    } else {
      this.isHover = false;
    }
  }

  ngOnInit(): void {}

  handleCartP(handler: number) {
    if (handler) {
      this.handleCartEvent.emit(0);
      this.selected = true;
    } else {
      this.handleCartEvent.emit(1);
      this.selected = false;
    }
  }
}
