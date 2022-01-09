import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-team20to21',
  templateUrl: './team20to21.component.html',
  styleUrls: ['./team20to21.component.scss']
})
export class Team20to21Component implements OnInit {
  dataObject :any={};

  private _jsonURL = '/assets/data/ecm-20-21.json';
   constructor(private http: HttpClient) {
     this.getJSON().subscribe(data => {
      // console.log(data);
      this.dataObject = data;
     });
   }
   public getJSON(): Observable<any> {
     return this.http.get(this._jsonURL);
   }

  ngOnInit(): void {
  }

}
