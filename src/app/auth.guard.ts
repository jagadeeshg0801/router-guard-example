import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router, private messageService: MessageService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.authService.isLoggedIn()){
        // alert(`You can't allow to access this app! Please login`)
        this.messageService.add({severity:'error', summary: 'Error', detail: `You can't allow to access this app! Please Login !!`});
        this.router.navigate(['/login'])
        return false
      }
      return true
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authService.getUserType().toLowerCase() != 'admin'){
        // alert('you don"t have access for this page')
        this.messageService.add({severity:'warn', summary: 'Warn', detail: `Sorry! You don't have access to this page.  Please Contact Adminstrator!!`});
        
        return false;
      }
    return true;
  }
  
}
