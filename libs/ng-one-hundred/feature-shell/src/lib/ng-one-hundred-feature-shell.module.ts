import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScullyLibModule } from '@scullyio/ng-lib';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@ngvn/ng-one-hundred/feature-home').then(
        (m) => m.NgOneHundredFeatureHomeModule
      ),
  },
  {
    path: 'day',
    loadChildren: () =>
      import('@ngvn/ng-one-hundred/feature-day').then(
        (m) => m.NgOneHundredFeatureDayModule
      ),
  },
];

@NgModule({
  imports: [CommonModule, ScullyLibModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class NgOneHundredFeatureShellModule {}
