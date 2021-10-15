import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
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
export class HomeComponent {
  @ViewChild('dayList', { static: true, read: ElementRef })
  dayListEl!: ElementRef<HTMLElement>;

  readonly vm$ = this.homeStore.vm$;

  constructor(private homeStore: HomeStore) {}

  onScrollClick() {
    this.dayListEl.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
