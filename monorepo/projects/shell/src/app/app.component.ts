import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  user:string;
  showContent: boolean = false;

  constructor(private auth:AuthService, private router:Router){
  }

  ngOnInit(): void {
    this.auth.userName.subscribe(val=>{
      console.log(val);
      if(val!==''){
        this.user = val;
        this.showContent = true;
      }else{
        this.router.navigate(['/login']);
      }
    })
  }

  
}
