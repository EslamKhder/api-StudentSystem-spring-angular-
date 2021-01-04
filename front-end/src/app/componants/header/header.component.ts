import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthenticationService,
              private route: Router) { }

  ngOnInit(): void {
  }

  isAuthenticaterUser(){
    return this.auth.isLogin();
  }
  logOut(){
    this.auth.logOut();
    this.route.navigateByUrl('register');

  }

  done(name: String) {
    this.route.navigateByUrl(`students/${name}`)
  }
}
