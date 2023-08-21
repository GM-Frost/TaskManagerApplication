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

@RestController
@RequestMapping("/tasks")
public class TaskController {

	  @Autowired
	    private TaskService taskService;

	  //CREATING NEW TASK
	    @CrossOrigin(origins = "http://localhost:5173/", allowedHeaders = { "Content-Type" })
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
	    @CrossOrigin(origins = "http://localhost:5173/", allowedHeaders = { "Content-Type" })
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
	    @CrossOrigin(origins = "http://localhost:5173/", allowedHeaders = { "Content-Type" })
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
	    @CrossOrigin(origins = "http://localhost:5173/", allowedHeaders = { "Content-Type" })
	    @PutMapping("/{taskID}/update/completed")
	    public ResponseEntity<?> updateCompleteTask(@PathVariable String taskID, @RequestBody Task updatedTask) {
	        Task task = taskService.updateTaskCompleted(taskID, updatedTask);
	        if (task != null) {
	            return ResponseEntity.ok("Task updated successfully.");
	        } else {
	            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Task not found.");
	        }
	    }

	    //DELETING TASK WITH TASKID
	    @CrossOrigin(origins = "http://localhost:5173/", allowedHeaders = { "Content-Type" })
	    @DeleteMapping("/{taskID}/delete")
	    public ResponseEntity<String> deleteTask(@PathVariable String taskID) {
	        taskService.deleteTask(taskID);
	        return ResponseEntity.ok("Task deleted successfully.");
	    }
	    
	    //GETTING TASK RELATED TO USER
	    @CrossOrigin(origins = "http://localhost:5173/", allowedHeaders = { "Content-Type" })
	    @GetMapping("/user/{userName}")
	    public ResponseEntity<List<Task>> getAllTasksForUser(@PathVariable String userName) {
	        List<Task> tasks = taskService.getAllTasksForUser(userName);
	        return ResponseEntity.ok(tasks);
	    }
	  //GETTING COMPLETED TASK RELATED TO USER
	    @CrossOrigin(origins = "http://localhost:5173/", allowedHeaders = { "Content-Type" })
	    @GetMapping("/user/{userName}/completed")
	    public ResponseEntity<List<Task>> getCompletedTasksForUser(@PathVariable String userName) {
	        List<Task> completedTasks = taskService.getCompletedTasksForUser(userName);
	        return ResponseEntity.ok(completedTasks);
	    }
}
