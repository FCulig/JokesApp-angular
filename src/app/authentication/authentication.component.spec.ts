import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationComponent } from './authentication.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { By } from '@angular/platform-browser';

describe('AuthenticationComponent', () => {
  let component: AuthenticationComponent;
  let fixture: ComponentFixture<AuthenticationComponent>;

  let regUsername;
  let regPass;
  let regRepPass;

  let registerForm;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [AuthenticationComponent]
    })
      .compileComponents();

      fixture = TestBed.createComponent(AuthenticationComponent);
      component = fixture.componentInstance;

      regUsername = fixture.debugElement.query(By.css("#usernameReg"));
      regPass = fixture.debugElement.query(By.css("#passwordReg"));
      regRepPass = fixture.debugElement.query(By.css("#repeatedPasswordReg"));

      registerForm = fixture.debugElement.query(By.css("#register-form"));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show successfull registration alert', () => {
    const mess = "Registration successful";
    spyOn(window, "alert");
    
    regRepPass.nativeElement.value = "123";
    regPass.nativeElement.value = "123";
    regUsername.nativeElement.value = "test";

    component.onRegister();

    expect(window.alert).toHaveBeenCalledWith(mess);
  });
});
