import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'noh-day',
  template: `
    <p>day works!</p>
    <!-- This is where Scully will inject the static HTML -->
    <scully-content></scully-content>
    <!-- This is where Scully will inject the static HTML -->
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DayComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
