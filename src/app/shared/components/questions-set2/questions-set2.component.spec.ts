import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsSet2Component } from './questions-set2.component';

describe('QuestionsSet2Component', () => {
  let component: QuestionsSet2Component;
  let fixture: ComponentFixture<QuestionsSet2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionsSet2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsSet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
