import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Student} from '../model/student';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  private urlStudents = 'http://localhost:8080/system/students';
  constructor(private httpStudent: HttpClient) { }

  getStudents(page,size): Observable<Student[]> {
    let header = new HttpHeaders({
      Authorization: this.createBasicAuthenticationHttpHeader()
    })
    return this.httpStudent.get<Student[]>(this.urlStudents + `?page=${page}&size=${size}`,{headers : header}).pipe(
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
    return this.httpStudent.get<Student>(`http://localhost:8080/system/student?id=${id}`).pipe(
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
    let header = new HttpHeaders({
      Authorization: this.createBasicAuthenticationHttpHeader()
    })
    return this.httpStudent.get<number>(this.urlStudents + `/length`,{headers: header}).pipe(
      map(response => response)
    );
  }
  getStudentSizeByName(name: string): Observable<number>{
    return this.httpStudent.get<number>(this.urlStudents + `/lengthname?name=${name}`).pipe(
      map(response => response)
    );
  }
  createBasicAuthenticationHttpHeader() {
    let userName = `eslam`;
    let password = `eslam`;
    let basicAuthHeaderString = `Basic ` + window.btoa(userName + `:` + password); // 64
    return basicAuthHeaderString;
  }
}
/*
interface GetResponseStudent {
  _embedded: {
    students: Student[]
  }
}
*/
