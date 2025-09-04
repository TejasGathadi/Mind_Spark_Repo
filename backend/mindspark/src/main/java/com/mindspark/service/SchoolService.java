package com.mindspark.service;

import com.mindspark.entity.School;

import java.util.List;
import java.util.Optional;

public interface SchoolService {

    School addNewSchool(School school);

    List<School> getAllSchool();

    School updateSchool( Long id, School updatedSchool) ;

    void deleteSchool(Long id);

    Optional<School> getSchoolById(Long id);
}
