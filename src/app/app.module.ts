import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingScreen } from './landing-screen/landing-screen.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { AboutMe } from './about-me/about-me.component';
import { Contact } from './contact/contact.component';
import { NgxGalleryModule } from 'ngx-gallery';

import { MatButtonModule, MatInputModule } from '@angular/material';
import { Gallery } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AboutMe,
    AppComponent,
    Contact,
    Gallery,
    LandingScreen,
    MainScreenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    NgxGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
