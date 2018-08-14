import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../resume.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Resume } from './resume';
import { SkillsComponent } from '../skills/skills.component'
import { ExperienceComponent } from '../experience/experience.component'

@Component({
  selector: 'app-graphic-designer-page',
  templateUrl: './graphic-designer-page.component.html',
  styleUrls: ['./graphic-designer-page.component.css'],
  directives:[SkillsComponent, ExperienceComponent]
})
export class GraphicDesignerPageComponent implements OnInit {

    childResume: Resume;

    constructor(
      private route: ActivatedRoute,
      private resumeService: ResumeService,
      private location: Location
  ) { }

    ngOnInit(): void {
      this.getResume();
    }

    getResume(): void {
      const section = this.route.url.value[0].path;
      this.resumeService.getResume(section)
        .subscribe(resume => this.childResume = resume)
    }

}
