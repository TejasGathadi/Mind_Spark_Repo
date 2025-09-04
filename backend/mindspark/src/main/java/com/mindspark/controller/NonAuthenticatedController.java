package com.mindspark.controller;

import com.mindspark.entity.School;
import com.mindspark.entity.Student;
import com.mindspark.service.SchoolService;
import com.mindspark.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/school/parents")
public class NonAuthenticatedController {

    @Autowired
    private SchoolService schoolService;

    @Autowired
    private StudentService studentService;

    @GetMapping("/all-schools-parents")
    public ResponseEntity<List<School>> getAllSchools(){
        return new ResponseEntity<>(schoolService.getAllSchool(), HttpStatus.OK);
    }


    @GetMapping("/{schoolId}")
    public ResponseEntity<List<Student>> getAllStudents(@PathVariable Long schoolId) {
        List<Student> studentList = studentService.allStudent(schoolId);
        return ResponseEntity.ok(studentList);
    }


}
