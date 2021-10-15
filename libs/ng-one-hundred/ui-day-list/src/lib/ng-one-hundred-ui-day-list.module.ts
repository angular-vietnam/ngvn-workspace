import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DayCardComponent } from './day-card.component';
import { DayListComponent } from './day-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DayListComponent, DayCardComponent],
  exports: [DayListComponent],
})
export class NgOneHundredUiDayListModule {}
