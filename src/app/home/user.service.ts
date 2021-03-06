import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users : User[] = [];
  userForm: any;
  userData: any;
  private _isUndoAction: boolean = false;
  prev_state_users: User[];

  public get isUndoAction(): boolean {
    return this._isUndoAction;
  }

  public set isUndoAction(value: boolean) {
    this._isUndoAction = value;
  }

  constructor(private formBuilder: FormBuilder) { 
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

  getUsersArray(){  
    return this.users ;
  }

  getUsersArray_prev_state(){  
    return this.prev_state_users ;
  }

  updateUsersArray(userList: User[]){
    this.prev_state_users = [...this.users ];
    this.users = [...userList];
    this.isUndoAction = true;
  }


  buildForm(userData: User){
    this.userForm = this.formBuilder.group({
      userId: [{ value: '', disabled: true} ,[Validators.required]],
      name: ['', Validators.required],
      location: ['', Validators.required]
    })
    if(userData){
      this.userForm.patchValue(userData);
    }
    return this.userForm;
  }
}
