import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  
  cols: any[] = [
    { fieldName: 'userId', headerName: 'User Id'  },
    { fieldName: 'name' , headerName: 'User Name'   },
    { fieldName: 'location' , headerName: 'Location'  },
  ];
  constructor(private userService: UserService, private router: Router, private confirmationService: ConfirmationService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) { 
         this.getUserList();
      }   
          // update this.homepageData
    });
   }
   usersList : User[] =  [];

  ngOnInit(): void {
    this.getUserList()
  }

  getUserList(){
    this.userService.getUsersList().subscribe((res)=>{
      this.usersList = res;
    })
  }

  getUndoStatus(){
    return this.userService.isUndoAction;
  }

  undoRecentAction(event:any){
    this.confirmationService.confirm({
      target: event.target,
      message: 'Are you sure that you want to discard Previous Action ?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        const usersList_prev_state = this.userService.getUsersArray_prev_state();
        this.userService.updateUsersArray(usersList_prev_state);
        this.usersList = [...usersList_prev_state]
        this.userService.isUndoAction = false;
      },
      reject: () => {
          this.userService.isUndoAction = false;
      }
  });
    
  }

}
