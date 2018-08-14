import { Component, OnInit, Input } from '@angular/core';
import { Resume } from '../resume'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  @Input() resume: Resume;
  constructor() { }

  ngOnInit() {
  }

}
