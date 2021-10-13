import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgOneHundredFeatureShellModule } from '@ngvn/ng-one-hundred/feature-shell';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgOneHundredFeatureShellModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
