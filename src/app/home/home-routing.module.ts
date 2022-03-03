import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HomeComponent } from './home/home.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
  
  { path: '', component: UsersListComponent, canActivateChild:[AuthGuard],
    children: [
      {path: 'edit/:id', component: EditUserComponent},
      {path: 'view/:id', component: ViewUserComponent},
      {path: 'delete/:id', component: DeleteUserComponent},
      {path: 'create', component: CreateUserComponent}
    ]
  },
  { path: 'welcome', component: HomeComponent },
  {pathMatch: 'full', redirectTo: ''}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
