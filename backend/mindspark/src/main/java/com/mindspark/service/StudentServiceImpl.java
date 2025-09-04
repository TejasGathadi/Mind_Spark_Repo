package com.mindspark.service;

import com.mindspark.entity.School;
import com.mindspark.entity.Student;
import com.mindspark.repository.SchoolRepository;
import com.mindspark.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService{


    @Autowired
    private SchoolRepository schoolRepository;

    @Autowired
    private StudentRepository studentRepository;


    @Override
    public List<Student> allStudent(Long schoolId) {
        School school = schoolRepository.findById(schoolId).orElseThrow(()-> new RuntimeException("School Not Found"));
        return school.getStudentList();
    }

    @Override
    public Student addStudents(Long schoolId, Student student) {
        School school = schoolRepository.findById(schoolId)
                .orElseThrow(() -> new RuntimeException("School Not found"));

        student.setSchool(school);

        return studentRepository.save(student);

    }

    @Override
    public Student updateStudent(Long studentId, Student updatedStudent) {
        return studentRepository.findById(studentId).map(student -> {
            if (updatedStudent.getName() != null) {
                student.setName(updatedStudent.getName());
            }

            if (updatedStudent.getMarks() != null) {
                student.setMarks(updatedStudent.getMarks());
            }

            return studentRepository.save(student);
        }).orElseThrow(() -> new RuntimeException("Student not found"));
    }

    @Override
    public void deleteStudentById(Long schoolId, Long studentId) {
            School school = schoolRepository.findById(schoolId)
                    .orElseThrow(()-> new RuntimeException("School Not Found"));

            List<Student> studentList = school.getStudentList();
            boolean removeStudent = studentList.removeIf(student -> student.getId().equals(studentId));

            if(!removeStudent){
                throw new RuntimeException("Student Not Found");
            }

            schoolRepository.save(school);

    }



    @Override
    public Student addOrUpdateMark(Long schoolId, Long studentId, Integer testIndex, Integer mark) {
        Student student = studentRepository.findById(studentId)
                .orElseThrow(() -> new RuntimeException("Student not found"));

        // Verify the student belongs to the given school
        if (!student.getSchool().getId().equals(schoolId)) {
            throw new IllegalArgumentException("Student does not belong to the specified school");
        }

        // Ensure the marks list has exactly 5 entries (can be null initially)
        List<Integer> marks = student.getMarks();
        while (marks.size() < 5) {
            marks.add(null);
        }

        if (testIndex < 0 || testIndex >= 5) {
            throw new IllegalArgumentException("Test index must be between 0 and 4");
        }

        marks.set(testIndex, mark);
        return studentRepository.save(student);
    }

}
