import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Drink,
  RestApiCocktailByIngredient,
  RestApiCocktailByName,
} from '../_models/drink.model';
import { sortingDrinkByName } from '../../.businessLogic/logicFunc';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getRandomDrink() {
    return this.httpClient.get(
      'https://www.thecocktaildb.com/api/json/v1/1/random.php'
    );
  }

  getDrinksByAlphabet(letter: string) {
    return this.httpClient
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
      )
      .pipe(
        map((res: any) => {
          const drinks: Drink[] = res.drinks as Drink[];
          return drinks;
        })
      );
  }

  getDrinksByName(query: string) {
    return this.httpClient
      .get<RestApiCocktailByName>(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
      )
      .pipe(
        map((res: RestApiCocktailByName) => {
          const drinkAPI: Drink[] = sortingDrinkByName(res.drinks);
          const drink: Drink[] = drinkAPI.map((el: Drink) => ({
            idDrink: el.idDrink,
            strDrink: el.strDrink,
            strDrinkThumb: el.strDrinkThumb,
            strInstructions: el.strInstructions,
          }));
          return drink;
        })
      );
  }

  getDrinksByIngredient(query: string) {
    return this.httpClient
      .get<RestApiCocktailByIngredient>(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${query}`
      )
      .pipe(
        map((res: RestApiCocktailByIngredient) => {
          const drinkAPI: Drink[] = sortingDrinkByName(res.drinks);
          const drink: Drink[] = drinkAPI.map((el: Drink) => ({
            idDrink: el.idDrink,
            strDrink: el.strDrink,
            strDrinkThumb: el.strDrinkThumb,
            strInstructions: el.strInstructions,
          }));
          return drink;
        })
      );
  }

  getDrinksById(id: string) {
    return this.httpClient
      .get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id)
      .pipe(
        map((response: any) => {
          const drink = response.drinks[0];
          drink.ingredients = [];
          drink.instructions = [];
          Object.keys(drink).forEach((key) => {
            if (key.startsWith('strIngredient') && drink[key]) {
              const index = key.replace('strIngredient', '');
              drink.ingredients.push({
                name: drink[key],
                measure: drink['strMeasure' + index],
              });
            }
            if (key.startsWith('strInstructions') && drink[key]) {
              let lang = key.replace('strInstructions', '');
              if (!lang) {
                lang = 'EN';
                drink.instructions.push({
                  lang: lang,
                  instructions: drink[key],
                });
              } else {
                drink.instructions.push({
                  lang: lang,
                  instructions: drink[key],
                });
              }
              drink.strInstructions = drink.instructions;
            }
          });
          return drink;
        })
      );
  }
}
