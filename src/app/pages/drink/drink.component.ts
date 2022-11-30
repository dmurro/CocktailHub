import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
})
export class DrinkComponent implements OnInit {
  drink: any = {
    ingredients: [],
    instructions: [],
  };

  @ViewChild("langInstruction") langIstr! : ElementRef



  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private location : Location) {}

  onBackClick() {
    this.location.back();
  }  

  changeLang(index : number) {
    this.langIstr.nativeElement.textContent = this.drink.instructions[`${index}`].instructions
  }

  ngOnInit(): void {
    this.route.data.subscribe(({drink}) => {
      this.drink = drink
    })
  }
}
