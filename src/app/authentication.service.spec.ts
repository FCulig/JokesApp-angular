import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('AuthenticationService', () => {
  let service: AuthenticationService;
  let backend: HttpTestingController;
  
  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });

    backend = TestBed.get(HttpTestingController);
    service = TestBed.get(AuthenticationService)
  }
  );

  it('should be created', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service).toBeTruthy();
  });

  it('should log in user', () => {
    const username = "testuser";
    const password = "pass";

    service.authenticate(username, password).subscribe(successMessage => {
      expect(successMessage.success).toEqual(1);
    });

    backend.expectOne({
      url: '//localhost:8080/login'
    }).flush({"success":1});
  })
});
