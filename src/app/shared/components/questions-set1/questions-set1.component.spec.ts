import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsSet1Component } from './questions-set1.component';

describe('QuestionsSet1Component', () => {
  let component: QuestionsSet1Component;
  let fixture: ComponentFixture<QuestionsSet1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionsSet1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsSet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
