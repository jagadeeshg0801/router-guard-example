import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Params, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userData : User | undefined;
  userForm: FormGroup;
  constructor(private router: Router, private activateRouter: ActivatedRoute, private userService: UserService,
    private formBuilder: FormBuilder) {
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
      if(this.userForm){
        this.userForm.patchValue(this.userData);
      }else{
        this.buildForm();
      }
    })
  }

  buildForm(){
    this.userForm = this.formBuilder.group({
      userId: [{ value: '', disabled: true} ,[Validators.required]],
      name: ['', Validators.required],
      location: ['', Validators.required]
    })
    if(this.userData){
      this.userForm.patchValue(this.userData);
    }
  }

  updateUserForm(){

  }

  resetData(){
    this.getUserData(this.userForm.get('userId')?.value);
  }

}
