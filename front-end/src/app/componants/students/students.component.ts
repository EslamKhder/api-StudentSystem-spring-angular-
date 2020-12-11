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

  students: Student[];
  message: String;

  constructor(private studentService: StudentService) {
  }
  ngOnInit(): void {
      this.getStudents();
  }

  getStudents(){
    this.studentService.getStudents().subscribe(
      data => this.students = data
    );
  }
  removeStudent(id: number){
    this.studentService.removeStudent(id).subscribe(
      response => {
        this.getStudents(),
        this.message = `success delete id ${id}`
      }
    );
  }

}
