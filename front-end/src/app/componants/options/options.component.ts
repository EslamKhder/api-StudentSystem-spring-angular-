import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Student} from '../../model/student';
import {StudentService} from '../../services/student.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Spacevalidator} from '../../model/spacevalidator';

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
        userName: new FormControl('',[Validators.required,Validators.minLength(5),Spacevalidator.noOnlyWithSpace]),
        age: new FormControl('',[Validators.required,Validators.maxLength(2),Validators.pattern("^[0-9]*$"),Spacevalidator.noOnlyWithSpace]),
        address: new FormControl('',[Validators.required]),
        phone: new FormControl('',[Validators.required,Validators.maxLength(11),Validators.minLength(11),Validators.pattern("^[0-9]*$"),Spacevalidator.noOnlyWithSpace]),
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

  get userName() {
    return this.studentGroub.get("student.userName");
  }
  get age() {
    return this.studentGroub.get("student.age");
  }
  get address() {
    return this.studentGroub.get("student.address");
  }
  get phone() {
    return this.studentGroub.get("student.phone");
  }
  get gender() {
    return this.studentGroub.get("student.gender");
  }
  done() {
    const stu = new Student(this.id,this.getUserName(),this.getGender(),this.getAge(),this.getPhone(),this.getAddress());
    if(this.studentGroub.invalid){
      this.studentGroub.markAllAsTouched();
    } else {
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


  }
  showMessage(){
    setTimeout(() => {
      this.invalidFullName = ""
    },3000)
  }
}
