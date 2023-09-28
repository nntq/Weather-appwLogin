import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userName: BehaviorSubject<string>; 

  constructor() {
    this.userName = new BehaviorSubject('');
  }

  login(usr:string){
    this.userName.next(usr);
  }

}
