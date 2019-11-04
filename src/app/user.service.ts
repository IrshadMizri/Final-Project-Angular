import { Injectable } from '@angular/core';
import { User } from './user';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public login(userInfo : User){
    localStorage.setItem('ACCESS_TOKEN',"access_token");
    localStorage.setItem('UserID',userInfo.username);
    return this.http.get<User>(environment.apiUrl+'/searchByName/'+userInfo.password)

  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN')!==null;
  }
  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
