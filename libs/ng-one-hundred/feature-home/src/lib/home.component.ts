import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'noh-home',
  template: `
    <p>
      home works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
