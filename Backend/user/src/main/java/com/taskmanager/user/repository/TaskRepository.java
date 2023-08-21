package com.taskmanager.user.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.taskmanager.user.model.Task;

public interface TaskRepository extends MongoRepository<Task, String>  {

	List<Task> findByUserName(String userName);

}
