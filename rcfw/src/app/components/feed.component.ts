import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: '../templates/feed.template.html'
  // styleUrls: ['../styles/app.component.css']
})
export class FeedComponent {

 public data = { "agency":"Troy Fire Station 2", "time":"12:02", "date":"December 04, 2017" };

}
