import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AppComponent } from '../components/app.component';
import {FeedComponent } from '../components/feed.component';
import { BehindComponent } from '../components/behind.component';
import { ArchiveComponent } from '../components/archive.component';
import { ContactComponent } from '../components/contact.component';



const routes: Routes = [
  { path: '', redirectTo: '/feed', pathMatch: 'full' },
  { path: 'feed', component: FeedComponent },
  { path: 'behind-the-scenes', component: BehindComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'archive', component: ArchiveComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
