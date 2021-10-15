import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { HomeStore } from './home.store';

@Component({
  selector: 'noh-home',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <noh-home-banner (scrollClick)="onScrollClick()"></noh-home-banner>
      <noh-day-list #dayList [days]="vm.days"></noh-day-list>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HomeStore],
})
export class HomeComponent implements OnInit {
  @ViewChild('dayList', { read: ElementRef })
  dayListEl?: ElementRef<HTMLElement>;

  readonly vm$ = this.homeStore.vm$;

  constructor(private homeStore: HomeStore) {}

  ngOnInit() {
    this.homeStore.initEffect();
  }

  onScrollClick() {
    if (this.dayListEl) {
      this.dayListEl.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
