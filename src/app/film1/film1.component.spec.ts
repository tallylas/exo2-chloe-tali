import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Film1Component } from './film1.component';

describe('Film1Component', () => {
  let component: Film1Component;
  let fixture: ComponentFixture<Film1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Film1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Film1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
