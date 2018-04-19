import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxSelectModule } from 'ngx-select-ex';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './components/app.component';
import { FeedComponent } from './components/feed.component';
import { BehindComponent } from './components/behind.component';
import { ArchiveComponent } from './components/archive.component';
import { ContactComponent } from './components/contact.component';
import { NotFoundComponent } from './components/404.component'

import { AppRoutingModule }     from './modules/app-routing.module';
import { NavComponent } from './components/nav.component'
import { FooterComponent } from './components/footer.component'



@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    NavComponent,
    ContactComponent,
    ArchiveComponent,
    BehindComponent,
    NotFoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSelectModule,
    HttpClientModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
