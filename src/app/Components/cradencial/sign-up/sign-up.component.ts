import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorService } from 'src/app/Services/error.service';
import { ServiceService } from 'src/app/Services/service.service';
import { CustomValidators } from 'src/app/Services/validiatoers';
import { LogInComponent } from '../log-in/log-in.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  Signupform!: FormGroup;
  submitted = false;
  error: boolean = false;
  errorMsgsToAlert: any;
  errMsgs = this.errorservice.errorMessages;

  constructor(
    private formBuilder: FormBuilder, 
    private service: ServiceService, 
    private errorservice: ErrorService,
    private router:Router,) { }
signIndialog(){
  this.service.openDialogSignin();
}
  ngOnInit(): void {
    this.Signupform = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20), CustomValidators.cannotContainSpace]],
      lastname: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20), CustomValidators.cannotContainSpace]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      confirmPassword: ['', Validators.required]
    },
      {
        validators: [CustomValidators.mustMatch('password', 'confirmPassword')]
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.Signupform.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.Signupform.invalid) {
      return;
    } else {

      console.log(JSON.stringify(this.Signupform.value, null, 2));

      const email = this.Signupform.value.email;
      const password = this.Signupform.value.password;

      this.service.SignUp(email, password).subscribe(res => {
        console.log(res);
        this.service.openDialogSignin();
      },
        err => {
          console.log(err);
          if (err) {
            this.errorMsgsToAlert = this.errMsgs[err.error.error.message]
            this.error = true;
            setTimeout(() => {
              this.error = false;
            }, 5000);
          }
        });
    }
  }



}
