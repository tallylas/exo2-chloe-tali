import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Film4Component } from './film4.component';

describe('Film4Component', () => {
  let component: Film4Component;
  let fixture: ComponentFixture<Film4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Film4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Film4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
