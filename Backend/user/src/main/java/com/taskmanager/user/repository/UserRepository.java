package com.taskmanager.user.repository;




import org.springframework.data.mongodb.repository.MongoRepository;

import com.taskmanager.user.model.User;

public interface UserRepository extends MongoRepository<User, String >{

	User findByEmail(String email);
	User findByUserName(String userName);
	boolean existsByUserName(String userName);	

}
