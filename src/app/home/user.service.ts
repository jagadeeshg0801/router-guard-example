import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users : User[] = [];
  constructor() { 
    this.users = [
      new User(1, 'Jaga', 'hyd'),
      new User(2, 'laxman', 'hyd'),
      new User(3, 'Ram', 'chennai'),
      new User(4, 'Raj', 'Bglr'),
      new User(5, 'Raki', 'hyd'),
      new User(6, 'mahesh', 'Mub'),
    ]
  }

  getUsersList(): Observable<User[]>{
    return of(this.users);
  }

  getUserData(id: number) : Observable<User>{ 
    const user: any = this.users.find((u)=> u.userId == id);
    return of(user);
  }

  updateUsersData(){
    
  }
}
