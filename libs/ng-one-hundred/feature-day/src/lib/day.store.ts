import { Injectable } from '@angular/core';
import { Day } from '@ngvn/ng-one-hundred/data-access-day';
import { EnhancedComponentStore } from '@ngvn/ng-one-hundred/util-enhanced-component-store';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable, tap } from 'rxjs';

export interface DayState {
  day: Day | null;
  loading: boolean;
}

export const dayInitialState: DayState = {
  day: null,
  loading: false,
};

export interface DayVm extends DayState {
  day: Day;
}

@Injectable()
export class DayStore extends EnhancedComponentStore<DayState> {
  readonly vm$: Observable<DayVm> = this.select(
    this.selectors.day$,
    this.selectors.loading$,
    (day, loading) => ({ day: day as Day, loading }),
    { debounce: true }
  );

  constructor(private scullyRoutesService: ScullyRoutesService) {
    super(dayInitialState);
  }

  readonly initEffect = this.effect(($) =>
    $.pipe(
      tap(() => {
        this.setDay(this.scullyRoutesService.getCurrent() as Observable<Day>);
      })
    )
  );

  readonly setDay = this.updater<Day>((state, day) => ({ ...state, day }));
  readonly setLoading = this.updater<boolean>((state, loading) => ({
    ...state,
    loading,
  }));
}
