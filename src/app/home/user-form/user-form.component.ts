import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit, OnChanges {
  @Input('userForm') userForm: FormGroup;
  @Input('formTitle') formTitle: string;
  @Input('actionType') actionType: string;
  @Output() userFormSubmit = new EventEmitter();
  
  userData: { userId: number; name: string; location: string; };
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes['actionType'].currentValue ){
        this.setFormEnability();
      }
  }

  setFormEnability(){
    switch(this.actionType){
      case 'view':
        this.userForm.disable();
        break;
      case 'delete':
        this.userForm.disable();
        break;
        default :
    }
  }

  





  formSubmit(){
        this.userFormSubmit.emit( this.userForm.getRawValue());
  }

  resetData(){
    this.getUserData(this.userForm.get('userId')?.value);
  }

  getUserData(id: number){
    this.userService.getUserData(id).subscribe((res)=>{
      this.userData = {...res};
      if(this.userForm){
        this.userForm.patchValue(this.userData);
      }
    })
  }

}
