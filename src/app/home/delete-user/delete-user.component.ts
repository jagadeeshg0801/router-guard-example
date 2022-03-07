import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  userData : User ;
  userForm: FormGroup;

  constructor(private router: Router, private activateRouter: ActivatedRoute, private userService: UserService, private messageService:MessageService) {
    this.activateRouter.params.subscribe((params)=>{ // Method2 to retrieve path Params
      if(params && params['id']){
        this.getUserData(params['id']);
      }
    })
   }

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
    this.userForm = this.userService.buildForm(this.userData);
  }

  submitUserData(event: User){
    let userList: User[] = this.userService.getUsersArray();
    let new_usersList = userList.filter(ele => ele.userId != event.userId)
    this.userService.updateUsersArray(new_usersList);
    this.messageService.add({severity:'success', summary: 'Success', detail: `User ${event.userId} Details Deleted Successfully!!`});
    this.router.navigate(['/user']);


  }
  

}
