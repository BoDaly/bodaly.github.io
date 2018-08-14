import { Component, OnInit, Output } from '@angular/core';
import { ResumeService } from '../resume.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Resume } from './resume';
import { SkillsComponent } from '../skills/skills.component'
import { ExperienceComponent } from '../experience/experience.component'
@Component({
  selector: 'app-software-developer-page',
  templateUrl: './software-developer-page.component.html',
  styleUrls: ['./software-developer-page.component.css'],
  directives:[SkillsComponent, ExperienceComponent]
})
export class SoftwareDeveloperPageComponent implements OnInit {
  childResume: Resume;

  constructor(
    private route: ActivatedRoute,
    private resumeService: ResumeService,
    private location: Location
) { }

  ngOnInit(): void {
    this.getResume();
  }

  openGallery(){
    this.triggerGallery.next()
  }


  getResume(): void {
    const section = this.route.url.value[0].path;
    this.resumeService.getResume(section)
      .subscribe(resume => this.childResume = resume)
  }

}
