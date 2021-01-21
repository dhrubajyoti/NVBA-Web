import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-imagegallery',
  templateUrl: './imagegallery.component.html',
  styleUrls: ['./imagegallery.component.scss'],
  
})
export class ImagegalleryComponent  {
   albums: any = [];
   albumImages: any = [];
   img:any;
   status: string;
  constructor( private httpClient: HttpClient, private modalService: BsModalService ){
   // console.log(this.albums);
  }
  ngOnInit(){
    this.httpClient.get("assets/data/gallery.json").subscribe(data =>{
      console.log(data);
      this.albums = data;
      this.albumImages = this.albums;
    })
  }

  bsModalRef: BsModalRef;
  // constructor() {}
  
  openModalWithComponent(image:any, title:any ) {
    console.log(image);
    this.img = image;
    const initialState = {
      imageUrl: image,
      title: title
    };

    this.bsModalRef = this.modalService.show(ModalContentComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }
  
  imageFilter(f:any){
    this.status = f;
    console.log(f);
    this.albumImages = [];
    this.albums.forEach(element => { 
      if(element.tag == f){
        this.albumImages.push(element);
      }
    });

  }
  imageFilterAll(){
    this.status = 'all';
    this.albumImages = this.albums;
  }

  
}


/* This is a component which we pass in modal*/
 
@Component({
  selector: 'modal-content',
  template: `
    <div class="modal-header">
      <div class="modal-title pull-left">{{title}}</div>
      <button type="button" class="close pull-right" aria-label="Close" (click)="bsModalRef.hide()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <img src="{{imageUrl}}" class="img-fluid" >
    </div>
    <!-- <div class="modal-footer">
      <button type="button" class="btn btn-default" (click)="bsModalRef.hide()">{{closeBtnName}}</button>
    </div> -->
  `
})
 
export class ModalContentComponent implements OnInit {
  title: string;
  imageUrl: string;
  closeBtnName: string;
  list: any[] = [];
 
  constructor(public bsModalRef: BsModalRef) {}
 
  ngOnInit() {
    // this.list.push('PROFIT!!!');
  }
}