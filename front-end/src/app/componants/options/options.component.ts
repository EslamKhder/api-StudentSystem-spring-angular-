import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Student} from '../../model/student';
import {StudentService} from '../../services/student.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  studentGroub: FormGroup;
  invalidFullName: String;
  id: number;
  myStudent: Student = new Student(0,"","","","","");

  constructor(private formBuilder: FormBuilder,private serviceStudent: StudentService,private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    if(this.id != 0){
      this.serviceStudent.getStudent(this.id).subscribe(
        response => {
          this.myStudent = response,
          this.studentGroub.get("student.userName").patchValue(response.fullName),
          this.studentGroub.get("student.age").patchValue(response.age),
          this.studentGroub.get("student.address").patchValue(response.address),
          this.studentGroub.get("student.phone").patchValue(response.phone),
          this.studentGroub.get("student.gender").patchValue(response.gender)
        }
      )
    }
    this.studentGroub = this.formBuilder.group({
      student: this.formBuilder.group({
        userName: new FormControl('',[Validators.required,Validators.minLength(5)]),
        age: new FormControl('',[Validators.required,Validators.minLength(2),Validators.pattern("^[0-9]")]),
        address: new FormControl('',[Validators.required]),
        phone: new FormControl('',[Validators.required,Validators.minLength(11),Validators.pattern("^[0-9]")]),
        gender: ['MALE']
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
    const stu = new Student(this.id,this.getUserName(),this.getGender(),this.getAge(),this.getPhone(),this.getAddress());
    if(this.id == 0){
      this.serviceStudent.addStudent(stu).subscribe(
        response => {
          this.router.navigateByUrl('/students');
        },
        error => {
          this.invalidFullName = "Full Name alerdy Exist";
          this.showMessage()
        }
      )
    } else {
      this.serviceStudent.editStudent(stu,this.id).subscribe(
        response => {
          this.router.navigateByUrl('/students');
        }
      )
    }

  }
  showMessage(){
    setTimeout(() => {
      this.invalidFullName = ""
    },3000)
  }
}
