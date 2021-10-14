import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'noh-home-banner',
  template: `
    <div class="relative h-screen w-screen flex items-center justify-center">
      <div
        class="flex flex-col gap-4 items-center justify-center w-full p-4 w-3/4 md:p-0 md:w-2/5"
      >
        <h2 class="font-bold">100 days of Angular</h2>
        <p class="text-center">
          Series độc quyền cung cấp bởi thành viên của Angular Vietnam về mỗi
          ngày mỗi chủ đề liên quan tới Angular.
        </p>

        <div class="flex gap-4 items-center justify-between">
          <a
            href="https://github.com/angular-vietnam/100-days-of-angular"
            target="_blank"
            rel="noopener noreferrer"
            class="px-4 py-2 rounded-lg border border-black hover:bg-black hover:text-white transition-colors"
          >
            Github
          </a>
          <a
            href="https://www.facebook.com/groups/AngularVietnam"
            target="_blank"
            rel="noopener noreferrer"
            class="px-4 py-2 rounded-lg border border-black hover:bg-black hover:text-white transition-colors"
          >
            Facebook
          </a>
        </div>
      </div>
      <noh-svg-scroll (scrollClick)="scrollClick.emit($event)"></noh-svg-scroll>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeBannerComponent {
  @Output() scrollClick = new EventEmitter<MouseEvent>();
}
