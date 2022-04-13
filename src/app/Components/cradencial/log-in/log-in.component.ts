import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorService } from 'src/app/Services/error.service';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  SignInForm!: FormGroup;
  submitted = false;
  error: boolean = false;
  errorMsgsToAlert: any;
  errMsgs = this.errorservice.errorMessages;

  constructor(
    private formBuilder: FormBuilder,
    private service: ServiceService,
    private errorservice: ErrorService,
    private router: Router,) { }

  ngOnInit(): void {
    this.SignInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.SignInForm.controls;
  }
dialogsigin(){
  this.service.openDialogSignup();
}
dialogforgotpas(){
  this.service.openDialogforgotPassword();
}


  onSubmit(): void {
    this.submitted = true;

    if (this.SignInForm.invalid) {
      return;
    } else {
      console.log(JSON.stringify(this.SignInForm.value, null, 2));
      const email = this.SignInForm.value.email;
      const password = this.SignInForm.value.password;
      this.service.SigIn(email, password).subscribe(res => {
        console.log(res);
        this.router.navigate(['/home']);
        this.service.dialog.closeAll();
        this.service.signedin.next(true)
        this.service.logout.next(false)
      }, err => {
        if (err) {
          console.log(err);
          this.errorMsgsToAlert = this.errMsgs[err.error.error.message]
          this.error = true;
          setTimeout(() => {
            this.error = false;
          }, 5000);
        }
      })
    }
  }

}
