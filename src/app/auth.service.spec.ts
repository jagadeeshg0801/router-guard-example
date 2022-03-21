import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';

describe('AuthService', async() => {
  let service: AuthService;
  const routerSpy = jasmine.createSpyObj(Router, ['navigate'])

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([{path: '', component: LoginComponent}])],
      providers: [{provide: Router, useValue: routerSpy}]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
