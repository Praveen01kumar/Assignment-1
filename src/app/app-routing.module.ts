import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/pages/home/home.component';
import { BlogComponent } from './Components/pages/blog/blog.component';
import { ContactUsComponent } from './Components/pages/contact-us/contact-us.component';
import { SignUpComponent } from './Components/cradencial/sign-up/sign-up.component';
import { LogInComponent } from './Components/cradencial/log-in/log-in.component';
import { UpdateUserComponent } from './Components/cradencial/update-user/update-user.component';
import { PorgotPasswordComponent } from './Components/cradencial/porgot-password/porgot-password.component';
import { ReadMoreComponent } from './Components/pages/blog/read-more/read-more.component';
import { AuthGuard } from './Auth/auth.guard';
import { Auth1Guard } from './Auth/auth1.guard';



const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "log-in", component: LogInComponent, canActivate:[Auth1Guard]},
  { path: "sign-up", component: SignUpComponent, canActivate:[Auth1Guard]},
  { path: "update-user", component: UpdateUserComponent, canActivate:[AuthGuard]},
  { path: "porgot-password", component: PorgotPasswordComponent },
  { path: "home", component: HomeComponent},
  { path: "blog", component: BlogComponent, canActivate:[AuthGuard], children: [ {path:'read-more', component: ReadMoreComponent}]},
  { path: "contact-us", component: ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
