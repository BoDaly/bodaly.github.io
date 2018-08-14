import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { EventEmitterService } from './event.emitter.service';
import { NgxImageGalleryComponent, GALLERY_IMAGE, GALLERY_CONF } from "ngx-image-gallery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BRYAN O'+"'"+'DALY';

  // get reference to gallery component
  @ViewChild(NgxImageGalleryComponent) ngxImageGallery: NgxImageGalleryComponent;

  // gallery configuration
  conf: GALLERY_CONF = {

    imageOffset: '0px',
    showDeleteControl: false,
    showImageTitle: false,
  };

  // gallery images
  images = [];

  constructor(private _eventEmitter: EventEmitterService){
    this._eventEmitter.trigger.subscribe((data) => {
      switch(true){
        case(data.toggle === 1):
        this.ngxImageGallery.images = data.images
        this.openGallery();
        break;
        case(data.toggle === -1): this.closeGallery();
        this.images = []
      }
    })

  }

  ngOnInit() {}

  // METHODS
  // open gallery
  openGallery(index: number = 0) {
    this.ngxImageGallery.open(index);
  }

  // close gallery
  closeGallery() {
    this.ngxImageGallery.close();
  }

  // set new active(visible) image in gallery
  newImage(index: number = 0) {
    this.ngxImageGallery.setActiveImage(index);
  }

  // next image in gallery
  nextImage(index: number = 0) {
    this.ngxImageGallery.next();
  }

  // prev image in gallery
  prevImage(index: number = 0) {
    this.ngxImageGallery.prev();
  }

  /**************************************************/

  // EVENTS
  // callback on gallery opened
  galleryOpened(index) {
    console.info('Gallery opened at index ', index);
  }

  // callback on gallery closed
  galleryClosed() {
    console.info('Gallery closed.');
  }

  // callback on gallery image clicked
  galleryImageClicked(index) {
    console.info('Gallery image clicked with index ', index);
  }

  // callback on gallery image changed
  galleryImageChanged(index) {
    console.info('Gallery image changed to index ', index);
  }

  // callback on user clicked delete button
  deleteImage(index) {
    console.info('Delete image at index ', index);
  }
}
