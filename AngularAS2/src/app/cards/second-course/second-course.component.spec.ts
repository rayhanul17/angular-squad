import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondCourseComponent } from './second-course.component';

describe('SecondCourseComponent', () => {
  let component: SecondCourseComponent;
  let fixture: ComponentFixture<SecondCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondCourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
