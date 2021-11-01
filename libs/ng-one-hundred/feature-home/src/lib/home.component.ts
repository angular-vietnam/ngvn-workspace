import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { HomeStateService } from './home.state';

@Component({
  selector: 'noh-home',
  template: `
    <ng-container *rxLet="vm$; let vm">
      <noh-home-banner (scrollClick)="onScrollClick()"></noh-home-banner>
      <noh-day-list #dayList [days]="vm.days"></noh-day-list>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HomeStateService],
})
export class HomeComponent implements OnInit {
  @ViewChild('dayList', { read: ElementRef })
  dayListEl?: ElementRef<HTMLElement>;

  readonly vm$ = this.homeStateService.select();

  constructor(private homeStateService: HomeStateService) {}

  ngOnInit() {
    this.homeStateService.initEffect();
  }

  onScrollClick() {
    if (this.dayListEl) {
      this.dayListEl.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
