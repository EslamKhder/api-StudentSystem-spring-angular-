import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {LoginService} from '../../services/login.service';
@Component({
  selector: 'app-regiser',
  templateUrl: './regiser.component.html',
  styleUrls: ['./regiser.component.css']
})
export class RegiserComponent implements OnInit {

  logInFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private loginService: LoginService) { }

  ngOnInit(): void {
    this.logInFormGroup = this.formBuilder.group({
      admin: this.formBuilder.group({
        userName: [''],
        password: ['']
      })
    });
  }
  OnSubmit() {
    this.loginService.login(this.logInFormGroup.get('admin').value.userName,this.logInFormGroup.get('admin').value.password)
    console.log(this.logInFormGroup.get('admin').value.userName)
    console.log(this.logInFormGroup.get('admin').value.password)
  }
}
