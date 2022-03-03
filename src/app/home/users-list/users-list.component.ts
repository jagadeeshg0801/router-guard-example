import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  usersList : User[] =[ ];
  cols: any[] = [
    { fieldName: 'userId'  },
    { fieldName: 'name'  },
    { fieldName: 'location'  },
  ];
  constructor(private userService: UserService) {
     this.userService.getUsersList().subscribe((res)=>{
      this.usersList = res;
    })
   }

  ngOnInit(): void {
  }

}
