import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeBannerComponent } from './home-banner.component';
import { SvgScrollComponent } from './svg-scroll.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HomeBannerComponent, SvgScrollComponent],
  exports: [HomeBannerComponent],
})
export class NgOneHundredUiHomeBannerModule {}
