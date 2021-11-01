import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LetModule } from '@rx-angular/template';
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
    LetModule,
  ],
  declarations: [DayComponent],
})
export class NgOneHundredFeatureDayModule {}
