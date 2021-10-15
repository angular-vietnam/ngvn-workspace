import { Injectable } from '@angular/core';
import { Day } from '@ngvn/ng-one-hundred/data-access-day';
import { EnhancedComponentStore } from '@ngvn/ng-one-hundred/util-enhanced-component-store';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { map, Observable, tap } from 'rxjs';

export interface HomeStoreState {
  days: Day[];
}

export const homeInitialState: HomeStoreState = {
  days: [],
};

export interface HomeStoreVm extends HomeStoreState {}

@Injectable()
export class HomeStore extends EnhancedComponentStore<HomeStoreState> {
  readonly vm$: Observable<HomeStoreVm> = this.select(
    this.selectors.days$,
    (days) => ({ days }),
    {
      debounce: true,
    }
  );

  constructor(private scullyRoutesService: ScullyRoutesService) {
    super(homeInitialState);
  }

  readonly initEffect = this.effect(($) =>
    $.pipe(
      tap(() => {
        this.setDays(
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
      })
    )
  );

  readonly setDays = this.updater<Day[]>((state, days) => ({ ...state, days }));
}
