import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../services/student.service';
import {Student} from '../../model/student';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[] = [];
  message: String;
  thePageNumber: number = 1;
  thePageSize: number = 2;
  theTotalElements: number;

  constructor(private studentService: StudentService,private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.getLength();
    this.route.paramMap.subscribe(() =>{
      const result = this.route.snapshot.paramMap.has("name");
      if (result == true) {
        const name = this.route.snapshot.paramMap.get("name");
        this.getStudentByName(name)
      } else {
        this.getStudents();
      }
    });
  }

  getStudentByName(name: String){
    this.studentService.getStudentByName(name).subscribe(
      data => {
        this.students = data
        //this.theTotalElements = data.length
      }
    );
  }
  removeStudent(id: number){
    const index = this.students.findIndex(student => student.id == id);
    this.studentService.removeStudent(id).subscribe(
      response => {
        this.students.splice(index,1),
        this.message = `success delete id ${id}`,
        this.showMessage()
      }
    );
  }
  showMessage(){
    setTimeout(() => {
      this.message = ""
    },3000)
  }

  getStudents() {
    this.studentService.getStudents(this.thePageNumber - 1,this.thePageSize).subscribe(
      response => {
        this.students = response
      }
    )
  }
  getLength() {
    this.studentService.getLength().subscribe(
      response => {
        this.theTotalElements = response
      }
    )
  }
}
