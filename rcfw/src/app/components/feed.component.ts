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

 public items:Array<string> = ['Averill Park',
 'Berlin Ambulance' ,
 'Berlin Volunteer Fire Company',
 'Best Luther Fire Company Inc.',
 'Brunswick #1',
 'Buskirk Fire Company',
 'Castleton Ambulance',
 'Castleton Fire Department',
 'Center Brunswick',
 'City Of Rensselaer - Fire Department',
 'Clifton Park & Halfmoon Emergency Corp.',
 'Clinton Heights Fire',
 'Defreestville Fire Protection District',
 'Eagle Mills Fire Company',
 'East Greenbush Fire Company Inc',
 'East Schodack Fire Company',
 'Empire Ambulance Service',
 'Grafton Ambulance',
 'Grafton Volunteer Fire Company',
 'Hemstreet Park Fire Company',
 'Hoags Corners Ambulance',
 'Hoags Corners Fire Company',
 'Hoosick Falls Joint Fire Company',
 'Hoosick Rescue Squad',
 'Hoosick Valley Fire Company',
 'Hoosick Valley Rescue',
 'Hoosick Volunteer Fire Company',
 'Johnsonville Fire Company',
 'Melrose Fire Company',
 'Mohawk Ambulance Service',
 'Mountain View Fire Company',
 'Nassau Ambulance',
 'Nassau Volunteer Fire Company',
 'North Greenbush Ambulance',
 'North Hoosick Fire Company',
 'Petersburgh Ambulance',
 'Petersburgh Fire Company',
 'Pittstown Ambulance',
 'Pittstown Volunteer Fire Company',
 'Pleasantdale Fire Company',
 'Poestenkill Volunteer Fire Company',
 'Raymertown Fire Company',
 'Rensselaer Ambulance',
 'RPI Ambulance',
 'Sand Lake Ambulance',
 'Schaghticoke Fire Company',
 'Schodack Landing Fire Company',
 'Schodack Valley Fire Company',
 'South Schodack Fire Company',
 'Speigletown Volunteer Fire Company',
 'Stephentown Ambulance',
 'Stephentown Fire Company',
 'Taborton Fire Company' ,
 'Troy Fire Department Station 1',
 'Troy Fire Department Station 2',
 'Troy Fire Department Station 3',
 'Troy Fire Department Station 4',
 'Troy Fire Department Station 5 - HQ',
 'Troy Fire Department Station 6',
 'Tsatsawassa Protective Fire Company',
 'Valley Falls Fire Company',
 'West Hoosick Fire Department Inc.',
 'West Sand Lake Volunteer Fire Company',
 'WF Bruen',
 'Wynantskill Fire Company'];

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
