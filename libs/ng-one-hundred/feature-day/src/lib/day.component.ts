import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';

@Component({
  selector: 'noh-day',
  template: `
    <p>day works!</p>
    <ng-container *ngIf="day$ | async as day">
      <pre>{{ day | json }}</pre>
    </ng-container>

    <!-- This is where Scully will inject the static HTML -->
    <scully-content></scully-content>
    <!-- This is where Scully will inject the static HTML -->
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DayComponent implements OnInit {
  readonly day$ = this.scullyRoutesService.getCurrent();

  constructor(private scullyRoutesService: ScullyRoutesService) {}

  ngOnInit(): void {}
}
