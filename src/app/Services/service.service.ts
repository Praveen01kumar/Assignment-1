import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, tap } from 'rxjs';
import { AuthResponce } from '../appinterface/auth-responce';
import { config } from '../config';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PorgotPasswordComponent } from '../Components/cradencial/porgot-password/porgot-password.component';
import { SignUpComponent } from '../Components/cradencial/sign-up/sign-up.component';
import { LogInComponent } from '../Components/cradencial/log-in/log-in.component';
import { UpdateUserComponent } from '../Components/cradencial/update-user/update-user.component';
import { User } from '../appinterface/user.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  user = new Subject<User>();

  signedin = new BehaviorSubject(false)
  logout = new BehaviorSubject(true)
  constructor(private http: HttpClient, public dialog: MatDialog ) {this.authoSignIn(); }

  SignUp(email: string, password: string) {
    return this.http.post<AuthResponce>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${config.API_KEY}`, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(tap(res => { return this.authentictedUser(res.email, res.localId, res.idToken, +res.expiresIn); }));
  }

  SigIn(email: string, password: string) {
    return this.http.post<AuthResponce>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${config.API_KEY}`, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(tap(res => { return this.authentictedUser(res.email, res.localId, res.idToken, +res.expiresIn); }));
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

  authoSignIn(){
//     const userData =JSON.parse(localStorage.getItem('User_Data'));
//     if(!userData){
//       return;
//     }
// const loggedInUser = new User()
  }
  private authentictedUser(email: string, userid: string, token: string, expiresIn: number) {
    const expirationGate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userid, token, expirationGate);
    console.log("user =>", user);
    this.user.next(user);
    localStorage.setItem("User_Data", JSON.stringify(user));
  }

}
