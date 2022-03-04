import { Component, OnInit } from '@angular/core';
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

  constructor(private router: Router, private activateRouter: ActivatedRoute, private userService: UserService) {
    this.activateRouter.queryParamMap.subscribe((param)=>{      console.log('param', param)}) // Method1 to retrieve query Params
    this.activateRouter.params.subscribe((params)=>{ // Method2 to retrieve path Params
      if(params && params['id']){
        this.getUserData(params['id']);
      }
    })
   }

  ngOnInit(): void {
  }

  getUserData(id: number){
    this.userService.getUserData(id).subscribe((res)=>{
      this.userData = {...res};
    })
  }

}
