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

describe('AddJokeComponent', () => {
  let component: AddJokeComponent;
  let fixture: ComponentFixture<AddJokeComponent>;

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
