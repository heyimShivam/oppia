import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutFoundationPageComponent } from './pages/about-foundation-page/about-foundation-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AnimationComponent } from './pages/animation-testing/animation';
import { JoyrideModule } from 'ngx-joyride';


@NgModule({
  declarations: [
    AnimationComponent,
    AppComponent,
    AboutFoundationPageComponent,
    AboutPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JoyrideModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
