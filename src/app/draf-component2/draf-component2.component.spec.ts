import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrafComponent2Component } from './draf-component2.component';

describe('DrafComponent2Component', () => {
  let component: DrafComponent2Component;
  let fixture: ComponentFixture<DrafComponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrafComponent2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrafComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
