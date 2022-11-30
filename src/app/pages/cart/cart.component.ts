import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../_service/cartService';
import { Drink } from 'src/app/_models/drink.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {

  drinks : Drink[] = this.cartService.getDrinks();
  constructor(private cartService: CartService) { }

  removeFromCart(drinkId : Drink) {
    this.drinks = this.drinks.filter((drink: Drink) => {
      return drink.idDrink !== drinkId.idDrink;
    });
    console.log(this.drinks);
    return this.drinks
  }

  ngOnInit(): void {
  }
}