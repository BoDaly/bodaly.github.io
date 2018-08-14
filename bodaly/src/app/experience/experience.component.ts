import { Component, OnInit, Input } from '@angular/core';
import { EventEmitterService } from '../event.emitter.service';
import { Router } from '@angular/router'
import { Resume } from '../resume';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  @Input() resume: Resume;

  sub:Subscription;

  constructor(private _eventEmitter: EventEmitterService , private router: Router) {}

  ngOnInit() {}

  openGallery(toggle,images) {
    this._eventEmitter.triggerGallery(toggle,images)
  }
}
