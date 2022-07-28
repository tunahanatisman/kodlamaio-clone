import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {path:'', component:HomepageComponent, pathMatch:'full'},
  {path:'app-homepage', component:HomepageComponent, pathMatch:'full'},
  {path:'app-login', component:LoginComponent, pathMatch:'full'},
  {path:'app-register', component:RegisterComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
