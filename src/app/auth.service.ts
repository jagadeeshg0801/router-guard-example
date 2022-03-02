import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isUserLoggedIn: boolean = false;
  userType: string = '';
  constructor(private router: Router) { 
    this.isUserLoggedIn = false;
  }

  isLoggedIn(): boolean{
    return this.isUserLoggedIn;
  }

  getUserType(): string{
    return this.userType;
  }

  userLogin(userType: string){
    this.isUserLoggedIn = true;
    this.userType = userType;
    this.router.navigate(['/home'])
  }
  logout(){
    this.isUserLoggedIn = false;
    this.router.navigate(['/login'])
  }
 
}
