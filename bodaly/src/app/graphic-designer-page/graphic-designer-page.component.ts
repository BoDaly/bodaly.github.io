import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../resume.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Resume } from '../resume';
import { SkillsComponent } from '../skills/skills.component'
import { ExperienceComponent } from '../experience/experience.component'
import { Router } from '@angular/router'

@Component({
  selector: 'app-graphic-designer-page',
  templateUrl: './graphic-designer-page.component.html',
  styleUrls: ['./graphic-designer-page.component.css']
  // directives:[SkillsComponent, ExperienceComponent]
})
export class GraphicDesignerPageComponent implements OnInit {

    childResume: Resume;
    router:any;

    constructor(
      private route: ActivatedRoute,
      private resumeService: ResumeService,
      private location: Location,
      private _router: Router
  ) { this.router = _router }

    ngOnInit(): void {
      this.getResume();
    }

    getResume(): void {
      const section = this.router.url;
      this.resumeService.getResume(section)
        .subscribe(resume => this.childResume = resume)
    }

}
