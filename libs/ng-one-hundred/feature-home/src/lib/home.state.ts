import { Injectable } from '@angular/core';
import { Day } from '@ngvn/ng-one-hundred/data-access-day';
import { RxState } from '@rx-angular/state';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { map, tap } from 'rxjs';

export interface HomeState {
  days: Day[];
}

export const homeInitialState: HomeState = {
  days: [],
};

@Injectable()
export class HomeStateService extends RxState<HomeState> {
  constructor(private scullyRoutesService: ScullyRoutesService) {
    super();
  }

  initEffect() {
    this.set(homeInitialState);
    this.connect(
      'days',
      this.scullyRoutesService.available$.pipe(
        map(
          (routes) =>
            routes.filter(
              (route) => route.route.includes('/day') && route.title != null
            ) as Day[]
        ),
        tap((routes) => {
          routes.sort(
            (a, b) =>
              Number(a.title.split(' ').pop()) -
              Number(b.title.split(' ').pop())
          );
        })
      )
    );
  }
}
