package com.taskmanager.Tasks.controller;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.taskmanager.Tasks.model.Tasks;
import com.taskmanager.Tasks.service.TaskService;

@RestController
@RequestMapping("/tasks")
public class TaskController {

	@Autowired
	private TaskService taskService;
	
	//Create New Task
	@CrossOrigin(origins = "http://localhost:5173/", allowedHeaders = { "Content-Type" })
	@PostMapping("/create")
	public String createTask(@RequestBody Tasks createTask) {
		try {
			createTask.setTaskID(UUID.randomUUID().toString().split("-")[0]);
			this.taskService.createTask(createTask);
			return "New Task Created";
		}catch(Exception e) {
			e.printStackTrace();
		}
		return "Cannot Create Task";
	}
	
	//Show All task
	@CrossOrigin(origins = "http://localhost:5173/", allowedHeaders = { "Content-Type" })
	@GetMapping("/showtasks/{userName}")
	public Optional<Tasks> getAllTaskByUser(@PathVariable String userName){
		return taskService.getAllTask(userName);
	}
	
	
	//Show every Task
	@CrossOrigin(origins = "http://localhost:5173/", allowedHeaders = { "Content-Type" })
	@GetMapping("/showtasks")
	public List<Tasks>getAllTask(){
		return taskService.getAllTask();
	}
	
}
