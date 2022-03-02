import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userType: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userType = this.authService.getUserType();
  }

  logout(){
    this.authService.logout();
  }

}
