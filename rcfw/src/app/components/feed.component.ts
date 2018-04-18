import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';


@Component({
  selector: 'feed',
  templateUrl: '../templates/feed.template.html'
  styleUrls: ['../styles/feed.style.scss','../styles/bootstrapselect.scss']
})
export class FeedComponent {

 public data = { "agency":"Troy Fire Station 2", "time":"12:02", "date":"December 04, 2017" };

}
