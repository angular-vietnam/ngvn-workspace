import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Day } from '@ngvn/ng-one-hundred/data-access-day';

@Component({
  selector: 'noh-day-card[day]',
  template: `
    <div class="flex flex-col p-4 gap-4 rounded-xl shadow-lg">
      <section class="text-sm font-thin text-red-600">
        {{ day.publishedAt | date: 'fullDate' }}
      </section>
      <section class="text-3xl font-bold">
        {{ day.title }}
      </section>
      <section
        class="font-normal text-md text-gray-700 min-h-day-card-description"
      >
        {{ day.description }}
      </section>
      <section class="font-bold text-lg text-blue-900">
        <span *ngFor="let author of day.authors; last as isLast">
          {{ author }}{{ isLast ? '' : ', ' }}
        </span>
      </section>
      <section class="flex justify-end">
        <a
          [routerLink]="day.route"
          class="bg-rose-600 text-white px-3 py-1 rounded border border-rose-600 transition-colors hover:bg-white hover:text-rose-600"
        >
          Read more
        </a>
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DayCardComponent {
  @Input() day!: Day;
}
