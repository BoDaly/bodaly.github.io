import {Injectable, EventEmitter} from '@angular/core';
import { Observable, of } from 'rxjs';
import { GALLERY_IMAGE } from './GALLERY_IMAGE'

@Injectable()
export class EventEmitterService {
  trigger = new EventEmitter();
  constructor() { }
  triggerGallery(toggle: number,images: GALLERY_IMAGE[] = []){
    this.trigger.emit({toggle:toggle,images:images})
  }

}
