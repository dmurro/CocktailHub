import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Drink } from 'src/app/_models/drink.model';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent implements OnInit {

  drinks : Drink[] = [];

  constructor(private route : ActivatedRoute, private httpClient : HttpClient ) { }



  ngOnInit(): void {

    const ingredient = this.route.snapshot.paramMap.get('ingredients')!;
    console.log(ingredient);
    this.httpClient
      .get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + ingredient)
      .subscribe((response: any) => {
        this.drinks = response.drinks;
  });

}
}
