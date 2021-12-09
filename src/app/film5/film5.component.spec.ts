import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Film5Component } from './film5.component';

describe('Film5Component', () => {
  let component: Film5Component;
  let fixture: ComponentFixture<Film5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Film5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Film5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
