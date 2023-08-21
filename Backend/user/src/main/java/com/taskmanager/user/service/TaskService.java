package com.taskmanager.user.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.taskmanager.user.model.Task;
import com.taskmanager.user.model.User;
import com.taskmanager.user.repository.TaskRepository;
import com.taskmanager.user.repository.UserRepository;

@Service
public class TaskService {

	  @Autowired
	    private TaskRepository taskRepo;

	    @Autowired
	    private UserRepository userRepo;

	    // Create a task and associate it with a user
	    public Task createTaskForUser(String userName, Task task) {
	        User user = userRepo.findByUserName(userName);
	        if (user != null) {
	            task.setUserName(userName);
	            taskRepo.save(task);
	            return task;
	        }
	        return null;
	    }

	    // Retrieve a task by taskID
	    public Task getTaskById(String taskID) {
	        return taskRepo.findById(taskID).orElse(null);
	    }

	    // Update a task
	    public Task updateTask(String taskID, Task updatedTask) {
	        Task task = taskRepo.findById(taskID).orElse(null);
	        if (task != null) {
	            task.setTaskTitle(updatedTask.getTaskTitle());
	            task.setTaskDesc(updatedTask.getTaskDesc());
	            task.setTaskDate(updatedTask.getTaskDate());
	            task.setTaskDueDate(updatedTask.getTaskDueDate());
	            return taskRepo.save(task);
	        }
	        return null;
	    }

	    // Delete a task
	    public void deleteTask(String taskID) {
	        Task task = taskRepo.findById(taskID).orElse(null);
	        if (task != null) {
	            User user = userRepo.findByTasksContaining(task);
	            if (user != null) {
	                user.getTasks().remove(task);
	                userRepo.save(user);
	            }
	            taskRepo.delete(task);
	        }
	    }

	    public List<Task> getAllTasksForUser(String userName) {
	        return taskRepo.findByUserName(userName);
	    }
	
}
