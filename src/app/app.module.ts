import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardDrinkComponent } from './shared/card-drink/card-drink.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './pages/search/search.component';
import { FormsModule } from '@angular/forms';
import { DrinkComponent } from './pages/drink/drink.component';
import { IngredientComponent } from './pages/ingredient/ingredient.component';
import { CartComponent } from './pages/cart/cart.component';
import { BlockUIModule } from 'ng-block-ui';
import { BlockUIHttpModule } from 'ng-block-ui/http';
import { TitleComponent } from './shared/title/title.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardDrinkComponent,
    SearchComponent,
    DrinkComponent,
    IngredientComponent,
    CartComponent,
    TitleComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    BlockUIModule.forRoot(),
    BlockUIHttpModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
