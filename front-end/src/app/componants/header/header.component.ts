import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService: LoginService,
              private route: Router) { }

  ngOnInit(): void {
  }

  isAuthenticaterUser(){
    return this.loginService.isLogin();
  }
  logOut(){
    this.loginService.logOut();
    this.route.navigateByUrl('register');

  }

}
