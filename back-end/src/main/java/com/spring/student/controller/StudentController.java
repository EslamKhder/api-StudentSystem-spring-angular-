package com.spring.student.controller;

import com.spring.student.model.Student;
import com.spring.student.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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
    public List<Student> getStudents(){
        return studentService.getStudents();
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


}
