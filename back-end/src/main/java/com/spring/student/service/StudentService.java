package com.spring.student.service;

import com.spring.student.doa.StudentRepository;
import com.spring.student.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {
    private StudentRepository studentRepository;

    @Autowired
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<Student> getStudents(){
        return studentRepository.findAll();
    }
    public Student getStudentById (Long id){
        return studentRepository.findById(id).get();
    }
    public Student saveStudent(Student student){
        return studentRepository.save(student);
    }
    public Student editStudent(Student student){
        return studentRepository.save(student);
    }
}
