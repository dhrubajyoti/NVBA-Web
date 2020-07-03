import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  dataObject :any={};

private _jsonURL = '/assets/data/ecm.json';
 constructor(private http: HttpClient) {
   this.getJSON().subscribe(data => {
    console.log(data);
    this.dataObject = data;
   });
 }
 public getJSON(): Observable<any> {
   return this.http.get(this._jsonURL);
 }

  ngOnInit() {

    // this.dataObject = fetch("../assets/data/ecm.json").then(response => {
    //   return response.json();
    // });

  }  




}
