import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { Day } from '@ngvn/ng-one-hundred/data-access-day';

@Component({
  selector: 'noh-day-list',
  template: `
    <div class="p-4 md:p-8 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
      <div *ngFor="let day of days; trackBy: dayTracker">
        <noh-day-card [day]="day"></noh-day-card>
      </div>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DayListComponent {
  @HostBinding('attr.id') hostId = 'ngOneHundredDayList';

  @Input() days: Day[] = [];

  dayTracker(_: number, day: Day) {
    return day.title;
  }
}
