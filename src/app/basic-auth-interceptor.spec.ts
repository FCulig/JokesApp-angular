import { BasicAuthInterceptor } from './basic-auth-interceptor';
import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

xdescribe('BasicAuthInterceptor', () => {
  const mockAuthService = {
    tokenType: 'fake',
    tokenValue: 'fake'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [
        {
          provide: AuthenticationService,
          useValue: mockAuthService
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: BasicAuthInterceptor,
          multi: true
        }]
    });
  });

  it('should create an instance', () => {
    expect(new BasicAuthInterceptor()).toBeTruthy();
  });

  it('should add Authorization header', inject([HttpClient, HttpTestingController], (http: HttpClient, httpMock: HttpTestingController) => {
    
    http.get('//localhost:8080/jokes').subscribe(
      response => {
        expect(response).toBeTruthy();
      }
    );

    const req = httpMock.expectOne(r =>
      r.headers.has('Authorization') &&
      r.headers.get('Authorization') === `fake fake`);
    expect(req.request.method).toEqual('GET');

    req.flush({ hello: 'world' });
    httpMock.verify();
  }));
});
