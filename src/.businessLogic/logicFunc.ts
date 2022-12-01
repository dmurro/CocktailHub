import { Drink } from 'src/app/_models/drink.model';

export const sortingDrinkByName = (query: Drink[]): Drink[] => {
  const sortedList = query.sort((a, b) => a.strDrink.localeCompare(b.strDrink));
  return sortedList;
};

/* export const checkCartQuantity = (itemQuantity: number): boolean => {
  if (itemQuantity >= 5) {
    alert('error');
    console.log('true');
    return true;
  } else {
    return false;
  }
}; */

/* export const checkCartOccurences = (items: any): number | undefined => {
  const count: any = {};
  let result = 0;
  for (const item of items) {
    if (count[item.idDrink]) {
      if (count[item.idDrink] >= 1) {
        result = 1;
      } else {
        count[item.idDrink] += 1;
        console.log(count);
        console.log(count[item.idDrink]);
        result = 0;
      }
    } else {
      count[item.idDrink] = 1;
      result = 0;
    }
  }
  return result;
}; */

/* export const removeCartOccurences = (items: any, drink : Drink): void => {
  const idToRemove = drink.idDrink;
  items = items.filter((drink: Drink) => {
    return drink.idDrink !== idToRemove;
  })
  console.log(items);
}; */
/*   for (const item of items) {
    if ([item.idDrink]) {
      console.log("ciao")
      item.splice(1,1)
    }
    console.log(items);
  } */
