package com.spring.student.service;

import com.spring.student.doa.StudentRepository;
import com.spring.student.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Service
public class StudentService {
    private StudentRepository studentRepository;

    @Autowired
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<Student> getStudents(int page,int size){
        Pageable pageable = PageRequest.of(page,size);
        return studentRepository.findAll(pageable).getContent();
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
    public void removeStudent(@RequestParam Long id){
        studentRepository.deleteById(id);
    }
    public List<Student> findByFullName(String fullname,int page ,int size){
        Pageable pageable = PageRequest.of(page,size);
        return this.studentRepository.findByFullNameContaining(fullname,pageable);
    }
    public Long getStudentsLength(){
        return studentRepository.getStudentsLength();
    }
    public Long getStudentsLengthByName(String name) {
        return this.studentRepository.getStudentsLengthByName(name);
    }
}
