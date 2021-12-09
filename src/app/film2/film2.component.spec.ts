import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Film2Component } from './film2.component';

describe('Film2Component', () => {
  let component: Film2Component;
  let fixture: ComponentFixture<Film2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Film2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Film2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
