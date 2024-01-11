package com.example.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.project.model.Student;

public interface StudentRepo extends JpaRepository<Student, Integer>{

}
