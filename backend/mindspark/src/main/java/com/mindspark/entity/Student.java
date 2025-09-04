package com.mindspark.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @ElementCollection
    private List<Integer> marks = new ArrayList<>(); // max 5 entries added progressively

    @ManyToOne
    @JoinColumn(name = "school_id")
    @JsonIgnore
    private School school;

    // Constructors
    public Student() {
    }

    public School getSchool() {
        return school;
    }

    public void setSchool(School school) {
        this.school = school;
    }

    public Student(String name, School school) {
        this.name = name;
        this.school = school;
    }

    // Add method to add marks one-by-one
    public boolean addMark(Integer mark) {
        if (marks.size() < 5) {
            marks.add(mark);
            return true;
        }
        return false;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Integer> getMarks() {
        return marks;
    }

    public void setMarks(List<Integer> marks) {
        this.marks = marks;
    }
}
