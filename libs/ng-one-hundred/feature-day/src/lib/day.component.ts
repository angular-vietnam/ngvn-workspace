import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { DayStateService } from './day.state';

@Component({
  selector: 'noh-day',
  template: `
    <div class="container mx-auto p-8 h-full">
      <a
        type="button"
        class="px-4 py-2 rounded border hover:bg-black hover:text-white"
        routerLink="/"
      >
        Home
      </a>
      <ng-container *rxLet="vm$; let vm">
        <h1 class="text-center text-4xl font-bold mb-6">{{ vm.day?.title }}</h1>
        <h6 class="text-center text-blue-900">
          <ng-container *ngFor="let author of vm.day?.authors; last as isLast">
            {{ author }}{{ isLast ? '' : ', ' }}
          </ng-container>
        </h6>

        <div *ngIf="vm.loading" class="progress progress-infinite">
          <div class="progress-bar3"></div>
        </div>

        <!-- This is where Scully will inject the static HTML -->
        <scully-content></scully-content>
        <!-- This is where Scully will inject the static HTML -->

        <h4 class="italic text-lg mt-4">
          Published on {{ vm.day?.publishedAt | date: 'mediumDate' }}
        </h4>
      </ng-container>
    </div>
  `,
  styleUrls: ['./day.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DayStateService],
})
export class DayComponent implements OnInit {
  readonly vm$ = this.dayStateService.vm$;

  constructor(private dayStateService: DayStateService) {}

  ngOnInit() {
    this.dayStateService.initEffect();
  }
}
