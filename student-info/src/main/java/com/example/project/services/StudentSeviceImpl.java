package com.example.project.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.project.model.Student;
import com.example.project.repository.StudentRepo;

@Service
public class StudentSeviceImpl implements StudentService {

	@Autowired
	private StudentRepo studRepo;
	
	@Override
	public Student saveData(Student student) {
		return studRepo.save(student);
	}

	@Override
	public List<Student> getAllStudent() {
		
		return studRepo.findAll() ;
	}
	

}
