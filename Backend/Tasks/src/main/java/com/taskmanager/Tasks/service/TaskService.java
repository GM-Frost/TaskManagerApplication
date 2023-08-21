package com.taskmanager.Tasks.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.taskmanager.Tasks.model.Tasks;
import com.taskmanager.Tasks.repository.TaskRepo;

@Service
public class TaskService {
	
	@Autowired
	private TaskRepo taskRepo;
	
	
	//Get All Task
	public List<Tasks>getAllTask(){
		return taskRepo.findAll();
	}
	
	//Create New Task
	public Tasks createTask(Tasks task) {
		return taskRepo.save(task);
	}
	
	//Get Single Task By ID
	public Tasks getTaskById(String taskID) {
		return taskRepo.findById(taskID).get();
	}
	
	//Get by UserID
	public Optional<Tasks> getAllTask(String userName) {
		return taskRepo.findByUserName(userName);
	}

}
