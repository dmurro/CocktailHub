export interface Drink {
    idDrink: string,
    strDrink: string,
    strDrinkThumb: string,
    strInstructions: string,
  }

  export interface RestApiCocktailByName {
    drinks: Drink[];
  }
  export interface RestApiCocktailByIngredient {
    drinks: Drink[];
  }

  export interface homeInputs {
    searchInput: string
  }

