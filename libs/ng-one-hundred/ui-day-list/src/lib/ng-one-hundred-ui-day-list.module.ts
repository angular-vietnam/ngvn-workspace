import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayListComponent } from './day-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    DayListComponent
  ],
  exports: [
    DayListComponent
  ],
})
export class NgOneHundredUiDayListModule {}
