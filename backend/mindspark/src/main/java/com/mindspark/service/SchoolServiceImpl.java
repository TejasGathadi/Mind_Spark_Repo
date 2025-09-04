package com.mindspark.service;

import com.mindspark.entity.School;
import com.mindspark.repository.SchoolRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class SchoolServiceImpl implements SchoolService {


    @Autowired
    private SchoolRepository schoolRepository;


    @Override
    public School addNewSchool(School school) {
        return schoolRepository.save(school);
    }

    @Override
    public List<School> getAllSchool() {
        return schoolRepository.findAll();
    }

    @Override
    public School updateSchool(Long id, School updatedSchool)  {
        return schoolRepository.findById(id).map(existingSchool -> {
            existingSchool.setSchoolName(updatedSchool.getSchoolName());
            existingSchool.setSchoolAddress(updatedSchool.getSchoolAddress());
            return schoolRepository.save(existingSchool);
        }).orElseThrow(()-> new RuntimeException("School not found"));
    }

    @Override
    public void deleteSchool(Long id) {
        schoolRepository.deleteById(id);
    }

    @Override
    public Optional<School> getSchoolById(Long id) {
        return schoolRepository.findById(id);
    }
}
