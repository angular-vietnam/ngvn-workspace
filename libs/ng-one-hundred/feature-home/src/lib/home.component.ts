import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';

@Component({
  selector: 'noh-home',
  template: ` <p>home works!</p> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  constructor(private scullyRoutesService: ScullyRoutesService) {}

  ngOnInit(): void {
    this.scullyRoutesService.available$.subscribe(console.log);
  }
}
