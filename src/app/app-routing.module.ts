import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkComponent } from './pages/drink/drink.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { IngredientComponent } from './pages/ingredient/ingredient.component';
import { CartComponent } from './pages/cart/cart.component';
import { DrinkByNameResolver } from './pages/search/seach.resolver';
import { DrinkResolver } from './pages/drink/drink.resolver';
import { HomeResolver } from './pages/home/home.resolver';

const routes: Routes = [
  { path: 'home', redirectTo: '/home/A', pathMatch: 'full' },
  {
    path: 'home/:letter',
    component: HomeComponent,
    resolve: { drinks: HomeResolver },
  },
  {
    path: 'drink/:idDrink',
    component: DrinkComponent,
    resolve: { drink: DrinkResolver },
  },
  { path: 'search', component: SearchComponent },
  {
    path: 'search',
    component: SearchComponent,
    resolve: {
      drink: DrinkByNameResolver,
    },
  },
  { path: 'cart', component: CartComponent },
  { path: 'ingredient/:ingredients', component: IngredientComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
