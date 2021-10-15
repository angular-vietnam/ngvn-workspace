import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgParticlesModule } from 'ng-particles';
import { HomeBannerComponent } from './home-banner.component';
import { SvgScrollComponent } from './svg-scroll.component';

@NgModule({
  imports: [CommonModule, NgParticlesModule],
  declarations: [HomeBannerComponent, SvgScrollComponent],
  exports: [HomeBannerComponent],
})
export class NgOneHundredUiHomeBannerModule {}
