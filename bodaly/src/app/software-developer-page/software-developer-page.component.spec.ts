import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareDeveloperPageComponent } from './software-developer-page.component';

describe('SoftwareDeveloperPageComponent', () => {
  let component: SoftwareDeveloperPageComponent;
  let fixture: ComponentFixture<SoftwareDeveloperPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareDeveloperPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareDeveloperPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
