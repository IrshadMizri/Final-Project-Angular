import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService,private router: Router) { }

  ngOnInit() {
  }

  showList(){
    this.router.navigateByUrl('/home')

  }

  logout(){
    if (confirm("Are you sure you want to logout?")) {
    this.userService.logout();
    this.router.navigateByUrl('/login');
    }
    // else{
    //   this.router.navigateByUrl('/home');
    // }
  }

}
