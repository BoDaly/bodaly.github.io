import { Component, OnInit, Input } from '@angular/core';
import { EventEmitterService } from '../event.emitter.service';
import { Resume } from '../resume';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  @Input() resume: Resume;

  constructor(private _eventEmitter: EventEmitterService) {}

  ngOnInit() {}

  openGallery(toggle,images) {
    this._eventEmitter.triggerGallery(toggle,images)
  }
}
