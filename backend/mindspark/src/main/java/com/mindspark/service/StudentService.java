package com.mindspark.service;

import com.mindspark.entity.Student;

import java.util.List;

public interface StudentService {

    List<Student> allStudent(Long schoolId);
    Student addStudents(Long schoolId , Student student);
    Student updateStudent(Long studentId, Student updatedStudent);
    void deleteStudentById(Long schoolId, Long studentId);
    Student addOrUpdateMark( Long schoolId,Long studentId, Integer testIndex, Integer mark);

}
