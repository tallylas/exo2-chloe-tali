import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Film3Component } from './film3.component';

describe('Film3Component', () => {
  let component: Film3Component;
  let fixture: ComponentFixture<Film3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Film3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Film3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
