import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditjokeComponent } from './editjoke.component';

describe('EditjokeComponent', () => {
  let component: EditjokeComponent;
  let fixture: ComponentFixture<EditjokeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditjokeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditjokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
