package com.mindspark.controller;



import com.mindspark.entity.Student;
import com.mindspark.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;




@RestController
@RequestMapping("/api/student")
public class StudentController {


    @Autowired
    private StudentService studentService;

    // Get all the student from a specific school using schoolId
    @GetMapping("/{schoolId}")
    public ResponseEntity<List<Student>> getAllStudents(@PathVariable Long schoolId) {
        List<Student> studentList = studentService.allStudent(schoolId);
        return ResponseEntity.ok(studentList);
    }


    //  Add Student to a School
    @PostMapping("/add/{schoolId}")
    public ResponseEntity<Student> addStudent(@PathVariable Long schoolId, @RequestBody Student student) {
        Student addedStudent = studentService.addStudents(schoolId, student);
        return ResponseEntity.ok(addedStudent);
    }

    //  Update entire Student data (including name, marks list, etc.)
    @PutMapping("/update/{studentId}")
    public ResponseEntity<Student> updateStudent(@PathVariable Long studentId, @RequestBody Student updatedStudent) {
        Student updated = studentService.updateStudent(studentId, updatedStudent);
        return ResponseEntity.ok(updated);
    }

    //  Delete Student by their School ID
    @DeleteMapping("/delete/{schoolId}/{studentId}")
    public void deleteStudent(@PathVariable Long schoolId, @PathVariable Long studentId) {
        studentService.deleteStudentById(schoolId, studentId);
    }

    //  Add or Update a specific test mark for a student
    @PutMapping("/{schoolId}/{studentId}/marks")
    public ResponseEntity<Student> addOrUpdateMark(
            @PathVariable Long schoolId,
            @PathVariable Long studentId,
            @RequestParam int testIndex,
            @RequestParam int mark) {
        Student updated = studentService.addOrUpdateMark( schoolId,studentId, testIndex, mark);
        return ResponseEntity.ok(updated);
    }


}
