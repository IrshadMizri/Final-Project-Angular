import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  

  constructor( private userservice:UserService, private router:Router, private formbuilder:FormBuilder ) { }

  loginForm:FormGroup;
  isSubmitted=false;
  user:User
  ngOnInit() {
    this.loginForm=this.formbuilder.group({
     
      username: ['',Validators.required],
      password:['',Validators.required]
         
        });
  }

  get formControls(){
    return this.loginForm.controls;
  }

  login(){
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      //alert('User form is not valid!!')
      return;
    }
    else
    {
      if(this.loginForm.valid){
        //alert('User form is valid!!')
        
        this.userservice.login(this.loginForm.value)
        .subscribe(data => {
              this.user = data;
              console.log(data);
              console.log(data.username);
              
           
              if(data.username !=null){
                this.isSubmitted  =true;
                console.log("Success");
                this.router.navigateByUrl('/home/showvendor');
              }
              else
              {
                window.alert("Please enter valid User credentials!");
              }
          }, (error) => {
              console.log(error);
              window.alert("Wrong username or password");
          }
        );
      } 
    }
   
    
  }

}
