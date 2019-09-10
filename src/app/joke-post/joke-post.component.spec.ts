import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokePostComponent } from './joke-post.component';

describe('JokePostComponent', () => {
  let component: JokePostComponent;
  let fixture: ComponentFixture<JokePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
