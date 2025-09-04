package com.mindspark.controller;

import com.mindspark.entity.School;
import com.mindspark.service.SchoolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/school")
public class SchoolController {


    @Autowired
    private SchoolService schoolService;

    @GetMapping("/all-schools")
    public ResponseEntity<List<School>> getAllSchools(){
        return new ResponseEntity<>(schoolService.getAllSchool(), HttpStatus.OK);
    }

    @PostMapping("/add-school")
    public ResponseEntity<School> addSchools(@RequestBody  School school){
        School newSchool = schoolService.addNewSchool(school);
        return ResponseEntity.status(HttpStatus.CREATED).body(newSchool);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<School>> getSchoolById(@PathVariable Long id){
        return new ResponseEntity<>(schoolService.getSchoolById(id), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public void deleteSchool(@PathVariable Long id){
        schoolService.deleteSchool(id);
    }


    @PutMapping("/{id}")
    public ResponseEntity<School> updateSchool(@PathVariable Long id, @RequestBody School school){
        return new ResponseEntity<>(schoolService.updateSchool(id,school), HttpStatus.OK);
    }


}
