import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicDesignerPageComponent } from './graphic-designer-page.component';

describe('GraphicDesignerPageComponent', () => {
  let component: GraphicDesignerPageComponent;
  let fixture: ComponentFixture<GraphicDesignerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicDesignerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicDesignerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
