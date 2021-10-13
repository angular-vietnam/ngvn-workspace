import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { DayComponent } from './day.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: ':slug', component: DayComponent },
      { path: '**', component: DayComponent },
    ]),
    ScullyLibModule,
  ],
  declarations: [DayComponent],
})
export class NgOneHundredFeatureDayModule {}
