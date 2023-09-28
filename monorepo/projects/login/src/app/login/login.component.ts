import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'shared';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  constructor(private auth:AuthService, private router:Router){}

  ngOnInit(): void {
    this.auth.userName.subscribe(val=>console.log(val))
    this.loginForm = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    })
  }

  onSubmit(){
    if(this.loginForm.valid){
      this.auth.login(this.loginForm.value.username);
      this.router.navigate(['/']);
    }  
  }
  
}
