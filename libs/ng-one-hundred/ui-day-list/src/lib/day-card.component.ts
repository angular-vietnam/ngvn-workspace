import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Day } from '@ngvn/ng-one-hundred/data-access-day';

@Component({
  selector: 'noh-day-card[day]',
  template: `
    <div class="flex flex-col p-3 space-y-5 rounded-xl shadow-lg">
      <section class="text-sm font-thin text-red-600">
        September 20, 10:30 AM
      </section>
      <section class="text-3xl font-bold">
        What kind <br />of knowledge?
      </section>
      <section class="font-normal text-md text-gray-700">
        Engagement is the term used for likes, shares, comments, and other
        interactions with a business’ social media presence.
      </section>
      <section class="font-bold text-lg text-blue-900">Dan Brown</section>
      <section class="flex justify-end">
        <button
          type="button"
          class="bg-rose-600 text-white px-3 py-1 rounded hover:bg-white hover:text-rose-600 hover:border hover:border-rose-600 transition-colors"
        >
          Read more
        </button>
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DayCardComponent {
  @Input() day!: Day | null;
}
