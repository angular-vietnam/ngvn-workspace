import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgOneHundredUiDayListModule } from '@ngvn/ng-one-hundred/ui-day-list';
import { NgOneHundredUiHomeBannerModule } from '@ngvn/ng-one-hundred/ui-home-banner';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
    NgOneHundredUiHomeBannerModule,
    NgOneHundredUiDayListModule,
  ],
  declarations: [HomeComponent],
})
export class NgOneHundredFeatureHomeModule {}
