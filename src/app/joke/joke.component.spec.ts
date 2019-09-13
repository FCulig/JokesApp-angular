import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeComponent } from './joke.component';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { AddJokeComponent } from '../add-joke/add-joke.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';

describe('JokeComponent', () => {
  let component: JokeComponent;
  let fixture: ComponentFixture<JokeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        JokeComponent,
        TopBarComponentMock,
        TopJokesMock,
        JokeItemMock,
        AddJokeMock
      ],
      providers: [

      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'app-top-bar',
  template: ''
})
class TopBarComponentMock {
}

@Component({
  selector: 'app-top-jokes',
  template: ''
})
class TopJokesMock {
}

@Component({
  selector: 'app-joke-item',
  template: ''
})
class JokeItemMock {
}

@Component({
  selector: 'app-add-joke',
  template: ''
})
class AddJokeMock {
}