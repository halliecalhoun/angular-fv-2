import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraySidebarComponent } from './gray-sidebar.component';

describe('GraySidebarComponent', () => {
  let component: GraySidebarComponent;
  let fixture: ComponentFixture<GraySidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraySidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraySidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
