import { Injectable } from '@angular/core';
const user = [
  {
    userName : "subc",
    passWord : "123123"
  },
  {
    userName : "abhs",
    passWord : "123123"
  }
]
@Injectable({
  providedIn: 'root'
})
export class LoginService {
isLoggedinUser:boolean =false;
constructor() { }
  login(username:string,password:string){
    for(let i =0;i<user.length;i++){
      if( username === user[i]['userName'] && password === user[i]['passWord'] ){
        this.isLoggedinUser = true;
        localStorage.setItem('token',''+this.isLoggedinUser);
        break;
      }
    }
  }
  signup(name:string,email:string,username:string){
    user.push({
      userName:username,
      passWord : ''
    })
  }
}
