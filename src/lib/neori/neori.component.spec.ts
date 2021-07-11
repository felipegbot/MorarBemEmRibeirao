import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeoriComponent } from './neori.component';

describe('NeoriComponent', () => {
  let component: NeoriComponent;
  let fixture: ComponentFixture<NeoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeoriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
