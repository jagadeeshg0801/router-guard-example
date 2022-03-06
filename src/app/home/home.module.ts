import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { UsersListComponent } from './users-list/users-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [
    HomeComponent,
    UsersListComponent,
    CreateUserComponent,
    EditUserComponent,
    ViewUserComponent,
    DeleteUserComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
