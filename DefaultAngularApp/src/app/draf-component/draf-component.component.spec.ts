import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrafComponentComponent } from './draf-component.component';

describe('DrafComponentComponent', () => {
  let component: DrafComponentComponent;
  let fixture: ComponentFixture<DrafComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrafComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrafComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
