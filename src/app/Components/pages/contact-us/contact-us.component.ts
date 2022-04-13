import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  ContactUsForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.ContactUsForm = this.formBuilder.group({ 
        email: ['', [Validators.required, Validators.email]],
        textarea: ['',[Validators.required,Validators.minLength(100),Validators.maxLength(250)]]
      },
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.ContactUsForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.ContactUsForm.invalid) {
      return;
    }

    console.log(JSON.stringify(this.ContactUsForm.value, null, 2));
  }


}
