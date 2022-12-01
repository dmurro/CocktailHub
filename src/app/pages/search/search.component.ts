import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_service/api.service';
import { Drink } from 'src/app/_models/drink.model';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/_service/cartService';

@Component({
  selector: 'app-search',
  templateUrl: '/search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  
  jsonIn = {
    searchInputName: '',
    searchInputIngredient: '',
  };

  drinks: Drink[] = [];
  cartList: Drink[] = [];
  isClicked: boolean = false;
  isNull: boolean = false;
  isSearching: boolean = false;
  handleCart: boolean = false;
  active: boolean = false;

  constructor(
    private apiService: ApiService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {}

  handleSearchDrinksByName = () => {
    this.apiService
      .getDrinksByName(this.jsonIn.searchInputName)
      .subscribe((res) => {
        res === null ? (this.isNull = true) : (this.drinks = res);
      });
    this.isSearching = true;
  };

  handleSearchDrinksByIngredient = () => {
    this.isClicked = true;
    this.apiService
      .getDrinksByIngredient(this.jsonIn.searchInputIngredient)
      .subscribe((res) => (this.drinks = res));
    this.isSearching = true;
  };

  addToCart(drink: Drink) {
    this.cartService.addToCart(drink);
  }

  removeFromCart(id : string) {
    this.cartService.removeFromCart(id);
  }

/*   handleCartParent = (drink: Drink, $event: number) => {
    if ($event === 0) {
      if (checkCartQuantity(this.cartList.length) === true) {
        alert('Max 5 items in cart');
        return;
      }
      if (checkCartOccurences(this.cartList) === 1) {
        alert('max 1 cocktail by type');
      } else {
        this.cartList.push(drink);
        this.addToCart(drink);
        this.handleCart = true;
        this.active = true;
      }
    }
    if ($event === 1) {
      this.handleCart = true;
      this.active = false;
    }
  }; */
}
