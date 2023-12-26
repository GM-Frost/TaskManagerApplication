package com.taskmanager.user.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.taskmanager.user.model.Task;

import com.taskmanager.user.service.TaskService;

@CrossOrigin(origins = "${cors.allowed-origins}", allowedHeaders = "${cors.allowed-headers}")
@RestController
@RequestMapping("/tasks")
public class TaskController {

	  @Autowired
	    private TaskService taskService;

	  //CREATING NEW TASK
		@CrossOrigin(origins = "${cors.allowed-origins}", allowedHeaders = "${cors.allowed-headers}")
	    @PostMapping("/{userName}/create")
	    public ResponseEntity<?> createTaskForUser(@PathVariable String userName, @RequestBody Task task) {
	        Task createdTask = taskService.createTaskForUser(userName, task);
	        if (createdTask != null) {
	            return ResponseEntity.ok("Task created successfully.");
	        } else {
	            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User not found.");
	        }
	    }

	    //GETTING TASK WITH TASKID
			@CrossOrigin(origins = "${cors.allowed-origins}", allowedHeaders = "${cors.allowed-headers}")
	    @GetMapping("/{taskID}")
	    public ResponseEntity<?> getTaskById(@PathVariable String taskID) {
	        Task task = taskService.getTaskById(taskID);
	        if (task != null) {
	            return ResponseEntity.ok(task);
	        } else {
	            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Task not found.");
	        }
	    }

	    //UPDATING TASK WITH TASKID
			@CrossOrigin(origins = "${cors.allowed-origins}", allowedHeaders = "${cors.allowed-headers}")
	    @PutMapping("/{taskID}/update")
	    public ResponseEntity<?> updateTask(@PathVariable String taskID, @RequestBody Task updatedTask) {
	        Task task = taskService.updateTask(taskID, updatedTask);
	        if (task != null) {
	            return ResponseEntity.ok("Task updated successfully.");
	        } else {
	            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Task not found.");
	        }
	    }
	    //UPDATING COMPLETED TASK WITH TASKID 
			@CrossOrigin(origins = "${cors.allowed-origins}", allowedHeaders = "${cors.allowed-headers}")
	    @PutMapping("/{taskID}/update/status")
	    public ResponseEntity<?> updateCompleteTask(@PathVariable String taskID, @RequestBody Task updatedTask) {
	        Task task = taskService.updateTaskCompleted(taskID, updatedTask);
	        if (task != null) {
	            return ResponseEntity.ok("Task updated successfully.");
	        } else {
	            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Task not found.");
	        }
	    }

	    //DELETING TASK WITH TASKID
	    @CrossOrigin(origins = "${cors.allowed-origins}", allowedHeaders = "${cors.allowed-headers}")
	    @DeleteMapping("/{taskID}/delete")
	    public ResponseEntity<String> deleteTask(@PathVariable String taskID) {
	        taskService.deleteTask(taskID);
	        return ResponseEntity.ok("Task deleted successfully.");
	    }
	    
	    //GETTING TASK RELATED TO USER
	    @CrossOrigin(origins = "${cors.allowed-origins}", allowedHeaders = "${cors.allowed-headers}")
	    @GetMapping("/user/{userName}")
	    public ResponseEntity<List<Task>> getAllTasksForUser(@PathVariable String userName) {
	        List<Task> tasks = taskService.getAllTasksForUser(userName);
	        return ResponseEntity.ok(tasks);
	    }
	  //GETTING COMPLETED TASK RELATED TO USER
		@CrossOrigin(origins = "${cors.allowed-origins}", allowedHeaders = "${cors.allowed-headers}")
	    @GetMapping("/user/{userName}/completed")
	    public ResponseEntity<List<Task>> getCompletedTasksForUser(@PathVariable String userName) {
	        List<Task> completedTasks = taskService.getCompletedTasksForUser(userName);
	        return ResponseEntity.ok(completedTasks);
	    }
	    
	    @CrossOrigin(origins = "${cors.allowed-origins}", allowedHeaders = "${cors.allowed-headers}")
	    @GetMapping("/user/{userName}/incomplete")
	    public ResponseEntity<List<Task>> getIncompleteTasksForUser(@PathVariable String userName) {
	        List<Task> incompleteTasks = taskService.getIncompleteTasksForUser(userName);
	        return ResponseEntity.ok(incompleteTasks);
	    }
}
