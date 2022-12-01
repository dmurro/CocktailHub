import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Drink } from 'src/app/_models/drink.model';

@Component({
  selector: 'app-card-drink',
  templateUrl: './card-drink.component.html',
  styleUrls: ['./card-drink.component.scss'],
})
export class CardDrinkComponent implements OnInit {
  @Input() drinks: Drink = {
    idDrink: '',
    strDrink: '',
    strDrinkThumb: '',
    strInstructions: '',
  };

  @Input() showButton: boolean = false;

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

}
