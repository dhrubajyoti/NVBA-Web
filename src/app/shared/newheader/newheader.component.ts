import { Component, OnInit } from '@angular/core';
import { GetjsonfileService } from './../services/getjsonfile.service';

@Component({
  selector: 'app-newheader',
  templateUrl: './newheader.component.html',
  styleUrls: ['./newheader.component.scss']
})
export class NewheaderComponent implements OnInit {

  dataObject :any={};

  private _jsonURL = '/assets/data/pages/header.json';

   constructor(private jsonFile:GetjsonfileService) {}


  ngOnInit(): void {
    this.jsonFile.pageData('header').subscribe(data => {
         this.dataObject = data;
       });
  }

}