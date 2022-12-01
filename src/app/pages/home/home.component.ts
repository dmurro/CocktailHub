import { Component, OnInit } from '@angular/core';
import { Drink, homeInputs } from 'src/app/_models/drink.model';
import { ApiService } from 'src/app/_service/api.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  alphabet: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  drink: Drink[] = [];
  randomDrink: any = {};
  selectedDrink?: any;
  isHover: boolean = false;
  isNull: boolean = false;

  constructor(private route: ActivatedRoute, private ApiService: ApiService) {}

  jsonIn: homeInputs = {
    searchInput: '',
  };

  getDrinksByNav() {
    this.route.data.subscribe(({ drinks }) => {
      this.drink = drinks;
      if (this.drink !== null) {
        this.isNull = false;
      } else {
        this.isNull = true;
      }
    });
  }

  handleCardHover() {
    this.isHover ? (this.isHover = false) : (this.isHover = true);
  }

  RandomDrink() {
    this.ApiService.getRandomDrink().subscribe((res: any) => {
      this.randomDrink = res.drinks[0];
    });
  }

  ngOnInit(): void {
    /* const getLetter = this.route.snapshot.paramMap.get("letter")!; */
    this.RandomDrink();
    this.getDrinksByNav();
  }
  /* this.route.paramMap.subscribe((res: any) => {
      const letter = res.get('letter');
      console.log(letter);
      if (letter !== null) {
        this.letter = letter;
      } else {
        this.letter = 'A';
      } */
}
