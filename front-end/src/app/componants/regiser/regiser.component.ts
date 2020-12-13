import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../services/login.service';
import {Router, Routes} from '@angular/router';
@Component({
  selector: 'app-regiser',
  templateUrl: './regiser.component.html',
  styleUrls: ['./regiser.component.css']
})
export class RegiserComponent implements OnInit {

  logInFormGroup: FormGroup;
  invalidMessage: string;

  constructor(private formBuilder: FormBuilder,
              private loginService: LoginService,
              private route: Router) { }

  ngOnInit(): void {
    this.logInFormGroup = this.formBuilder.group({
      admin: this.formBuilder.group({
        userName: [''],
        password: ['']
      })
    })
  }
  OnSubmit() {
    const result = this.loginService.login(this.logInFormGroup.get('admin').value.userName,this.logInFormGroup.get('admin').value.password)
    if(result == true){
      this.route.navigateByUrl('students');
    } else {
      this.invalidMessage = 'Invalid UserName and Password';
      this.showMessage()
    }
  }
  showMessage(){
    setTimeout(() => {
      this.invalidMessage = ""
    },3000)
  }
}
