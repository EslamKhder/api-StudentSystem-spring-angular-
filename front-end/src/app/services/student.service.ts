import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Student} from '../model/student';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {API_URL} from "../app.constants";

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  private urlStudents = `${API_URL}/system/students`;
  constructor(private httpStudent: HttpClient) { }

  getStudents(page,size): Observable<Student[]> {

    return this.httpStudent.get<Student[]>(this.urlStudents + `?page=${page}&size=${size}`).pipe(
      map(response => response)
    );
  }
  removeStudent(id: number){
    //return this.httpStudent.delete(this.urlStudents + "?id=" + id)
    return this.httpStudent.delete(this.urlStudents + `?id=${id}`)
  }
  addStudent(student: Student){
    return this.httpStudent.post(this.urlStudents,student);
  }
  getStudent(id: number): Observable<Student>{
    return this.httpStudent.get<Student>(`${API_URL}/system/student?id=${id}`).pipe(
      map(response => response)
    );
  }
  editStudent(student: Student,id: number){
    return this.httpStudent.put(this.urlStudents + `?id=${id}` , student);
  }
  getStudentByName(name: String,page: number,size: number): Observable<Student[]>{
    return this.httpStudent.get<Student[]>(this.urlStudents + `/searchname?fullname=${name}&page=${page}&size=${size}`).pipe(
      map(response => response)
    )
  }
  getStudentsSize(): Observable<number> {
    return this.httpStudent.get<number>(this.urlStudents + `/length`).pipe(
      map(response => response)
    );
  }
  getStudentSizeByName(name: string): Observable<number>{
    return this.httpStudent.get<number>(this.urlStudents + `/lengthname?name=${name}`).pipe(
      map(response => response)
    );
  }

}
/*
interface GetResponseStudent {
  _embedded: {
    students: Student[]
  }
}
*/
