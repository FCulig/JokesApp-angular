import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { JokeItemComponent } from './joke-item.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TopJokesComponent } from '../top-jokes/top-jokes.component';

describe('JokeItemComponent', () => {
  let component: JokeItemComponent;
  let fixture: ComponentFixture<JokeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterModule.forRoot([])
      ],
      declarations: [JokeItemComponent],
      providers: [
        RouterTestingModule, TopJokesComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
