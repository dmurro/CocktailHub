import { Drink } from '../_models/drink.model';
import { Injectable } from '@angular/core';
/* . . . */
@Injectable({
  providedIn: 'root'
})
export class CartService {
  drinks: Drink[] = [];

  addToCart(drink: Drink) {
    if ( this.drinks.length === 5 ) {
      alert('You can order a maximum of 5 cocktails')
      return
    }
    for (const drinko of this.drinks) {
      if (drink.idDrink === drinko.idDrink) {
        alert('You can order just 1 drink by name')
        return
      }
    }
    this.drinks.push(drink);
    alert('Item added to cart');
  }

  getDrinks() {
    return this.drinks;
  }

  clearCart() {
    this.drinks = [];
    return this.drinks;
  }

  removeFromCart(id: string) {
    this.drinks = this.drinks.filter((drink: Drink) => {
      return drink.idDrink !== id;
    });
  }
}