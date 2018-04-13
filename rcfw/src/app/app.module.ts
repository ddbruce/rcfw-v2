import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './components/app.component';
import { FeedComponent } from './components/feed.component';
import { AppRoutingModule }     from './modules/app-routing.module';
import { NavComponent } from './components/nav.component'


@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
