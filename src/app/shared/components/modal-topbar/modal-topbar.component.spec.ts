import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTopbarComponent } from './modal-topbar.component';

describe('ModalTopbarComponent', () => {
  let component: ModalTopbarComponent;
  let fixture: ComponentFixture<ModalTopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTopbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
