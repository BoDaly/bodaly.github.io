import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IllustratorPageComponent } from './illustrator-page.component';

describe('IllustratorPageComponent', () => {
  let component: IllustratorPageComponent;
  let fixture: ComponentFixture<IllustratorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IllustratorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IllustratorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
