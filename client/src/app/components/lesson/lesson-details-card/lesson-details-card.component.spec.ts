import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonDetailsCardComponent } from './lesson-details-card.component';

describe('LessonDetailsCardComponent', () => {
  let component: LessonDetailsCardComponent;
  let fixture: ComponentFixture<LessonDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonDetailsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
