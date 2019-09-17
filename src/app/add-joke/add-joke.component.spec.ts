import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeComponent } from '../joke/joke.component';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { JokeItemComponent } from '../joke-item/joke-item.component';
import { AddJokeComponent } from './add-joke.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicAuthInterceptor } from '../basic-auth-interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TopJokesComponent } from '../top-jokes/top-jokes.component';
import { By } from '@angular/platform-browser';

describe('AddJokeComponent', () => {
  let component: AddJokeComponent;
  let fixture: ComponentFixture<AddJokeComponent>;

  let openingButton;
  let jokeTextArea;
  let submitButton;
  let closeButton;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        ReactiveFormsModule,
        RouterTestingModule],
      declarations: [AddJokeComponent],
      providers: [TopBarComponent,
        JokeComponent,
        TopJokesComponent,
        JokeItemComponent,
        {
          provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true
        }],
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddJokeComponent);
    component = fixture.componentInstance;

    openingButton = fixture.debugElement.query(By.css('#open-btn'));
    submitButton = fixture.debugElement.query(By.css("#submit-btn"));
    closeButton = fixture.debugElement.query(By.css("#close-btn"));
    jokeTextArea = fixture.debugElement.query(By.css("textarea"));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
