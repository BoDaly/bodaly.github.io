import { Injectable } from '@angular/core';
import { RESUME } from './resume-info';
import { Observable, of } from 'rxjs';
import { Resume } from './resume';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  getResume(section: string): Observable<Resume> {
  return of(RESUME.find(resume => resume.section === section));
  }
  constructor() { }
}
