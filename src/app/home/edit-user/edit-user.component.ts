import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Params, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userData : User;
  userForm: FormGroup;
  constructor(private router: Router, private activateRouter: ActivatedRoute, private userService: UserService,
    private formBuilder: FormBuilder, private messageService: MessageService) {
    this.activateRouter.queryParamMap.subscribe((param)=>{      console.log('param', param)}) // Method1 to retrieve query Params
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

  resetData(){
    this.getUserData(this.userForm.get('userId')?.value);
  }

  submitUserData(event: User){
    let userList: User[] =[ ...this.userService.getUsersArray()];
    let index = userList.findIndex(ele => ele.userId == event.userId)
    userList[index] = {...event}
    this.userService.updateUsersArray(userList);
    this.messageService.add({severity:'success', summary: 'Success', detail: `User Details Updated Successfully!!`});
    this.router.navigate(['/user']);


  }

}
