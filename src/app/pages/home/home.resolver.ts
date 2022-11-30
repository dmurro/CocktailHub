import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Drink } from 'src/app/_models/drink.model';
import { ApiService } from 'src/app/_service/api.service';

@Injectable({
  providedIn: 'root',
})
export class HomeResolver implements Resolve<any> {
  constructor(private apiService: ApiService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.apiService.getDrinksByAlphabet(route.paramMap.get('letter')!);
  }
}
