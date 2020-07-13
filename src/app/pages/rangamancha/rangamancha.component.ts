import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-rangamancha',
  templateUrl: './rangamancha.component.html',
  styleUrls: ['./rangamancha.component.scss'],
  animations: [
    trigger('popOverState', [
      state('show', style({
       // opacity: 1
       width: "100%"
      })),
      state('hide',   style({
       // opacity: 0
       width: "2%"
      })),
      state('leave',   style({
        // opacity: 0
        top: "0px"
       })),
       state('pull',   style({
        // opacity: 0
        top: "-400px"
       })),
      transition('show => hide', animate('2000ms ease-out')),
      transition('hide => show', animate('2000ms ease-in')),
      transition('pull => leave', animate('2000ms ease-out')),
      transition('leave => pull', animate('2000ms ease-in'))
    ])
  ]
})
export class RangamanchaComponent implements OnInit {
  show = true;
  rope = true;
  constructor() { }

  ngOnInit(): void {
  }


  get stateName() {
    return this.show ? 'show' : 'hide'
  }

  get ropeState(){
    return this.rope ? 'leave' : 'pull'
  }


  toggle() {
    this.show = !this.show;
    this.rope = !this.rope;
  }
}
