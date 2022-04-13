import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthResponce } from '../appinterface/auth-responce';
import { config } from '../config';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PorgotPasswordComponent } from '../Components/cradencial/porgot-password/porgot-password.component';
import { SignUpComponent } from '../Components/cradencial/sign-up/sign-up.component';
import { LogInComponent } from '../Components/cradencial/log-in/log-in.component';
import { UpdateUserComponent } from '../Components/cradencial/update-user/update-user.component';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  signedin = new BehaviorSubject(false)
  logout = new BehaviorSubject(true)
  constructor(private http: HttpClient, public dialog: MatDialog) { }

  SignUp(email: string, password: string) {
    return this.http.post<AuthResponce>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${config.API_KEY}`, {
      email: email,
      password: password,
      returnSecureToken: true
    });
  }

  SigIn(email: string, password: string) {
    return this.http.post<AuthResponce>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${config.API_KEY}`, {
      email: email,
      password: password,
      returnSecureToken: true
    });
  }
  //dialog opening
  openDialogSignin() {
    const dilogConfig = new MatDialogConfig;
    dilogConfig.height = "80%";
    this.dialog.closeAll();
    this.dialog.open(LogInComponent, dilogConfig);
  }

  openDialogSignup() {
    this.dialog.closeAll();
    this.dialog.open(SignUpComponent);
  }

  openDialogforgotPassword() {
    const dilogConfig = new MatDialogConfig;
    dilogConfig.height = "60%";
    this.dialog.closeAll();
    this.dialog.open(PorgotPasswordComponent, dilogConfig);
  }

  openDialogUpdateUser() {
    this.dialog.closeAll();
    this.dialog.open(UpdateUserComponent);
  }


  Signout() {

  }

  UpdateUser() {

  }

  Deleteuser() {

  }

  ForgotPassword() {

  }


}
