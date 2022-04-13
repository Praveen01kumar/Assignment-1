import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-porgot-password',
  templateUrl: './porgot-password.component.html',
  styleUrls: ['./porgot-password.component.css']
})
export class PorgotPasswordComponent implements OnInit {


  ForgotPasswordForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.ForgotPasswordForm = this.formBuilder.group({ 
        email: ['', [Validators.required, Validators.email]]
      });
  }
  openDialogSignup(){
    this.dialog.closeAll();
    this.dialog.open(SignUpComponent);
  }

  get f(): { [key: string]: AbstractControl } {
    return this.ForgotPasswordForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.ForgotPasswordForm.invalid) {
      return;
    }

    console.log(JSON.stringify(this.ForgotPasswordForm.value, null, 2));
  }

}
