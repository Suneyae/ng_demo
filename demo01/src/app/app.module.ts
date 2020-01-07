import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewsComponent } from './mycomponents/news/news.component';
import {Service01Service} from './myservices/service01.service'

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [Service01Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
