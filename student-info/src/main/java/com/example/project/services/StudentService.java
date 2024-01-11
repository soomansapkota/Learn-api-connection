package com.example.project.services;

import java.util.List;

import com.example.project.model.Student;

public interface StudentService {

	public Student saveData(Student student);
	public List<Student> getAllStudent();
	
}
