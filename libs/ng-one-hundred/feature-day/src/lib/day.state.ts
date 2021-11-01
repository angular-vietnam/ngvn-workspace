import { Injectable } from '@angular/core';
import { Day } from '@ngvn/ng-one-hundred/data-access-day';
import { MetaService } from '@ngvn/ng-one-hundred/util-meta-service';
import { RxState, selectSlice } from '@rx-angular/state';
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

@Injectable()
export class DayStateService extends RxState<DayState> {
  readonly vm$ = this.select(selectSlice(['day', 'loading']));

  constructor(
    private scullyRoutesService: ScullyRoutesService,
    private metaService: MetaService
  ) {
    super();
  }

  initEffect() {
    this.set(dayInitialState);
    this.connect(
      'day',
      (this.scullyRoutesService.getCurrent() as Observable<Day>).pipe(
        tap(this.metaService.update.bind(this.metaService))
      )
    );
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this.metaService.resetMeta();
  }
}
