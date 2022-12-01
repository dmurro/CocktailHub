import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Drink } from 'src/app/_models/drink.model';
import { CartService } from 'src/app/_service/cartService';

@Component({
  selector: 'app-card-drink',
  templateUrl: './card-drink.component.html',
  styleUrls: ['./card-drink.component.scss'],
})
export class CardDrinkComponent implements OnInit {
  @Input() drink: Drink = {
    idDrink: '',
    strDrink: '',
    strDrinkThumb: '',
    strInstructions: '',
  };

  @Input() showButton: boolean = false;

  selected: boolean = false;
  isHover: boolean = false;

  constructor(private cartService : CartService) {}

  
  addToCart(drink: Drink) {
    this.cartService.addToCart(drink);
    this.selected = !this.selected;
  }


  handleCardHover(x: boolean) {
    if (this.isHover === false) {
      this.isHover = true;
    } else {
      this.isHover = false;
    }
  }

  ngOnInit(): void {}

}
