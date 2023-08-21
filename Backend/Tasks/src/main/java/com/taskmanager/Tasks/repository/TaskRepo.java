package com.taskmanager.Tasks.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.taskmanager.Tasks.model.Tasks;

public interface TaskRepo extends MongoRepository<Tasks, String>{

	Optional<Tasks> findByUserName(String userName);

}
