import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { map, tap } from 'rxjs';

type ScullyRouteWithTitle = Omit<ScullyRoute, 'title'> & { title: string };

@Component({
  selector: 'noh-home',
  template: `
    <noh-home-banner (scrollClick)="onScrollClick()"></noh-home-banner>
    <noh-day-list #dayList></noh-day-list>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  @ViewChild('dayList', { static: true, read: ElementRef })
  dayListEl!: ElementRef<HTMLElement>;

  readonly days$ = this.scullyRoutesService.available$.pipe(
    map(
      (routes) =>
        routes.filter(
          (route) => route.route.includes('/day') && route.title != null
        ) as ScullyRouteWithTitle[]
    ),
    tap((routes) => {
      routes.sort(
        (a, b) =>
          Number(a.title.split(' ').pop()) - Number(b.title.split(' ').pop())
      );
    })
  );

  constructor(private scullyRoutesService: ScullyRoutesService) {}

  onScrollClick() {
    this.dayListEl.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
