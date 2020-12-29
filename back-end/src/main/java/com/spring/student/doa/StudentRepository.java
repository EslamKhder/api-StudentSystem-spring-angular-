package com.spring.student.doa;

import com.spring.student.model.Student;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRepository extends JpaRepository<Student,Long> {

    //public List<Student> findByFullNameContaining(String fullname);

    public List<Student> findByFullNameContaining(String fullname,Pageable pageable);

    @Query("select COUNT(id) from student")
    public Long getStudentsLength();

    @Query("select COUNT(id) from student where fullName LIKE %?1%")
    public Long getStudentsLengthByName(String name);

}