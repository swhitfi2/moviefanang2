import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviefanComponent } from './moviefan.component';

describe('MoviefanComponent', () => {
  let component: MoviefanComponent;
  let fixture: ComponentFixture<MoviefanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviefanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviefanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
