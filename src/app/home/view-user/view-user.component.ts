import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  userData : User;
  userForm: FormGroup;

  constructor(private router: Router, private activateRouter: ActivatedRoute, private userService: UserService) {
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
  
}
