import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./home/home.module').then(module => module.HomeModule), canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// USer List = > user / Admin => is Login   <= canActive

// each user (EDiT, Delete) =>  is Admin   <= canActiveChild


// /userList 

// 1 laxman dev  edit delete
// 2 jaga dev

// /userList/userEdit:2 => Edit user Component