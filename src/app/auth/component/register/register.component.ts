import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  Form!: FormGroup;
  constructor(private Fb: FormBuilder) { }

  ngOnInit(): void {
    this.Form = this.Fb.group({
      firstName : ['', Validators.required],
      lastName : ['', Validators.required],
      email : ['', Validators.required],
      Password : ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      Confirmpassword : ['', Validators.compose([Validators.required, Validators.minLength(5)])]
    })
  }

  submit(Form: FormGroup) {
    console.log(Form);
  }
}
