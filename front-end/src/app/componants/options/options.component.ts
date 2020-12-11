import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  studentGroub: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.studentGroub = this.formBuilder.group({
      student: this.formBuilder.group({
        userName: ['fullname'],
        age: ['age'],
        address: ['address'],
        phone: ['phone'],
        gender: ["gender"]
      })
    })
  }
  getUserName() {
    return this.studentGroub.get("student").value.userName;
  }
  getAge() {
    return this.studentGroub.get("student").value.age;
  }
  getAddress() {
    return this.studentGroub.get("student").value.address;
  }
  getPhone() {
    return this.studentGroub.get("student").value.phone;
  }
  getGender() {
    return this.studentGroub.get("student").value.gender;
  }
  done() {
    console.log(this.getUserName())
    console.log(this.getAge())
    console.log(this.getAddress())
    console.log(this.getPhone())
    console.log(this.getGender())

  }
}
