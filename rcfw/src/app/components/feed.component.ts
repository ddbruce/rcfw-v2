import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { NgxSelectModule, INgxSelectOptions } from 'ngx-select-ex';


@Component({
  selector: 'feed',
  templateUrl: '../templates/feed.template.html',
  styleUrls: ['../styles/feed.style.scss','../styles/bootstrapselect.scss']
})
export class FeedComponent {

 public data = { "agency":"Troy Fire Station 2", "time":"12:02", "date":"December 04, 2017" };

 public items:Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
     'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
     'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin', 'Düsseldorf',
     'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg', 'Hamburg', 'Hannover',
     'Helsinki', 'Leeds', 'Leipzig', 'Lisbon', 'Łódź', 'London', 'Kraków', 'Madrid',
     'Málaga', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Naples', 'Palermo',
     'Paris', 'Poznań', 'Prague', 'Riga', 'Rome', 'Rotterdam', 'Seville', 'Sheffield',
     'Sofia', 'Stockholm', 'Stuttgart', 'The Hague', 'Turin', 'Valencia', 'Vienna',
     'Vilnius', 'Warsaw', 'Wrocław', 'Zagreb', 'Zaragoza'];

   private value:any = ['Athens'];
   private _disabledV:string = '0';
   private disabled:boolean = false;

   private get disabledV():string {
     return this._disabledV;
   }

   private set disabledV(value:string) {
     this._disabledV = value;
     this.disabled = this._disabledV === '1';
   }

   public selected(value:any):void {
     console.log('Selected value is: ', value);
   }

   public removed(value:any):void {
     console.log('Removed value is: ', value);
   }

   public refreshValue(value:any):void {
     this.value = value;
   }

   public itemsToString(value:Array<any> = []):string {
     return value
       .map((item:any) => {
         return item.text;
       }).join(',');
   }

}
