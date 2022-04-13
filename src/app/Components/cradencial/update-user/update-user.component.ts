import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/Services/service.service';
import { CustomValidators } from 'src/app/Services/validiatoers';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})

export class UpdateUserComponent implements OnInit {

  UpdateUserForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private service:ServiceService) {}

dialosignup(){
  this.service.openDialogSignup();
}


  ngOnInit(): void {
    this.UpdateUserForm = this.formBuilder.group({ 
        firstname: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(20),CustomValidators.cannotContainSpace]],
        lastname: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(20),CustomValidators.cannotContainSpace]],
        email: ['', [Validators.required, Validators.email]],
        password: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]],
        confirmPassword: ['', Validators.required]
      },
      {
        validators: [CustomValidators.mustMatch('password', 'confirmPassword')]
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.UpdateUserForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.UpdateUserForm.invalid) {
      return;
    }

    console.log(JSON.stringify(this.UpdateUserForm.value, null, 2));
  }



}
