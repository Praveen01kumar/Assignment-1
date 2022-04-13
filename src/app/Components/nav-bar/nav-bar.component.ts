import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ServiceService } from 'src/app/Services/service.service';
import { LogInComponent } from '../cradencial/log-in/log-in.component';
import { PorgotPasswordComponent } from '../cradencial/porgot-password/porgot-password.component';
import { SignUpComponent } from '../cradencial/sign-up/sign-up.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  signedin: boolean = false
  logout: boolean = true

  Cradencialstatus: boolean = false;
  constructor(private service: ServiceService, public dialog: MatDialog, private router: Router) {
    this.service.signedin.subscribe(res => {
      this.signedin = res
    })
    this.service.logout.subscribe(res => {
      this.logout = res
    })
  }

  dialogSignin() {
    this.service.openDialogSignin();
  }

  dialogSignup() {
    this.service.openDialogSignup();
  }

  dialogForgotPassword() {
    this.service.openDialogforgotPassword();
  }
  
  dialosignup() {
    this.service.openDialogUpdateUser()
  }

  ngOnInit(): void {

  }


  LogOut() {
    this.service.signedin.next(false);
    this.service.logout.next(true);
    this.router.navigate(['/home']);
  }
}
