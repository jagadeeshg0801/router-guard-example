import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  userData : User;
  userForm : FormGroup;
  constructor(private userService: UserService, private router: Router, private messageService: MessageService) { }

  ngOnInit(): void {
    this.buildForm();
  }
  getUserData(id: number){
    this.userService.getUserData(id).subscribe((res)=>{
      this.userData = {...res};
     this.buildForm();
     
    })
  }

  buildForm(){
    let userId = new Date().getTime();
    this.userForm = this.userService.buildForm(new User(userId, '', ''));
  }

  resetData(){
    this.getUserData(this.userForm.get('userId')?.value);
  }
  submitUserData(event: User){
    let userList: User[] = [...this.userService.getUsersArray()];
    userList.push(event);
    this.userService.updateUsersArray(userList);
    this.messageService.add({severity:'success', summary: 'Success', detail: `New User Details Saved Successfully!!`});
    this.router.navigate(['/user']);
  }

}
