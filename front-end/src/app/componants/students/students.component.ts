import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../services/student.service';
import {Student} from '../../model/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[];

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

  deleteStudemt(id: number) {
    alert(id);
    this.studentService.removeStudents(id).subscribe(
      data => console.log(data)
    );
  }
}
