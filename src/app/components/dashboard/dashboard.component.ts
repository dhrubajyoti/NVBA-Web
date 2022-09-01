import { Component, OnInit } from '@angular/core';
import { GetjsonfileService } from './../../shared/services/getjsonfile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  sliderImage : any;

  constructor( private jsonFile:GetjsonfileService) {}

  ngOnInit(): void {
    this.jsonFile.pageData('homeSliderImage').subscribe(data => {
   //   console.log(data);
      this.sliderImage = data;
    });
  }

  
}  