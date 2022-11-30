import { Drink } from '../_models/drink.model';
import { Injectable } from '@angular/core';
/* . . . */
@Injectable({
  providedIn: 'root'
})
export class CartService {
  drinks: Drink[] = [];

  addToCart(drink: Drink) {
    this.drinks.push(drink);
  }

  getDrinks() {
    return this.drinks;
  }

  clearCart() {
    this.drinks = [];
    return this.drinks;
  }

  removeFromCart(drinks : Drink[], id: string) {
    this.drinks = this.drinks.filter((drink: Drink) => {
      return drink.idDrink !== id;
    });
  }
}