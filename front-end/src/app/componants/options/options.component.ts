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

  done() {

  }
}
