import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './screens/auth/login/login.component';
import { SignUpComponent } from './screens/auth/sign-up/sign-up.component';

const routes: Routes = [
  {path: 'auth/login', component: LoginComponent},
  {path: 'auth/signup', component: SignUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
