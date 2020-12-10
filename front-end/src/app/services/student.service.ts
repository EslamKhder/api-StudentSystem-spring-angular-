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

  getStudents(): Observable<Student[]> {
    return this.httpStudent.get<Student[]>(this.urlStudents).pipe(
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
