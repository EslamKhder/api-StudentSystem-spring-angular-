package com.spring.student.controller;

import com.spring.student.model.Student;
import com.spring.student.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("system/")
public class StudentController {

    private StudentService studentService;

    @Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    // http://localhost:8080/system/students
    @GetMapping("students")
    public List<Student> getStudents(@RequestParam int page,@RequestParam int size){
        return studentService.getStudents(page,size);
    }

    // http://localhost:8080/system/student?id=12
    @GetMapping("student")
    public Student getStudentById (@RequestParam Long id){
        return studentService.getStudentById(id);
    }

    // http://localhost:8080/system/students
    @PostMapping("students")
    public Student saveStudent(@RequestBody Student student){
        return studentService.saveStudent(student);
    }

    // http://localhost:8080/system/students?id=12
    @PutMapping("students")
    public Student editStudent(@RequestBody Student student,@RequestParam Long id){
        student.setId(id);
        return studentService.saveStudent(student);
    }

    @DeleteMapping("students")
    public void removeStudent(@RequestParam Long id){
        studentService.removeStudent(id);
    }

   // http://localhost:8080/system/students/searchname?fullname=Eslam Khder
    @GetMapping("students/searchname")
    public List<Student> findByFullName(@RequestParam String fullname,@RequestParam int page,@RequestParam int size){
        return this.studentService.findByFullName(fullname,page,size);
    }
    @GetMapping("students/length")
    public Long getStudentsLength(){
        return this.studentService.getStudentsLength();
    }
    @GetMapping("students/lengthname")
    public Long getStudentsLengthByName(@RequestParam String name){
        return this.studentService.getStudentsLengthByName(name);
    }
}
