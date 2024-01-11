package com.example.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.project.model.Student;
import com.example.project.services.StudentService;


@RestController
@RequestMapping("/student")
@CrossOrigin
public class studentControlle {
	
	@Autowired
	private StudentService studentService;
	
	
	@GetMapping("/get")
	public List<Student> view()
	{
		return studentService.getAllStudent();
	
	}
	
	@PostMapping("/add")
	public String add(@RequestBody Student student) {
		studentService.saveData(student);
		
		return "new Student is added";
	}

}
