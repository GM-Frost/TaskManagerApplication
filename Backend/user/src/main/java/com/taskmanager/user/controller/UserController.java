package com.taskmanager.user.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import com.taskmanager.user.model.User;
import com.taskmanager.user.service.UserService;
import com.taskmanager.user.validation.UserValidation;

@CrossOrigin(origins = "${cors.allowed-origins}", allowedHeaders = "${cors.allowed-headers}")
@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	private UserService userService;
	
	// REGISTER NEW USER
	@CrossOrigin(origins = "${cors.allowed-origins}", allowedHeaders = "${cors.allowed-headers}")
	@PostMapping("/create")
	public ResponseEntity<String> createUser(@RequestBody User userCreate) {
		
		try {
			String userName = userCreate.getUserName();
			boolean userExists = userService.userExists(userName);
	        if (userExists) {
	            return ResponseEntity.badRequest().body("User already exists, please select a new username.");
	        }
			
			userCreate.setUserID(UUID.randomUUID().toString().split("-")[0]);
			this.userService.createUser(userCreate);
			return ResponseEntity.ok("User created successfully.");
		} catch (Exception e) {
		      e.printStackTrace();
		        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred.");
		    }
		
	}

	
	// SHOW ALL USER
	@CrossOrigin(origins = "${cors.allowed-origins}", allowedHeaders = "${cors.allowed-headers}")
	@GetMapping("/showusers")
	public List<User> getAllUser(){
		return userService.getAllUser();
	}

	// VALIDATE LOGIN USER
	@CrossOrigin(origins = "${cors.allowed-origins}", allowedHeaders = "${cors.allowed-headers}")
		@PostMapping("/login")
		public ResponseEntity<?> login(@RequestBody User user) {
			 String userName = user.getUserName();
			    String password = user.getPassword();

			    User loggedInUser = userService.validateLoginAndGetUser(userName, password);
			    
			    if (loggedInUser != null) {
			        return ResponseEntity.ok(loggedInUser);
			    } else {
			    	return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Credentials");
			    }
		}
		
		
	
		///GETTING USER BY ID
		@CrossOrigin(origins = "${cors.allowed-origins}", allowedHeaders = "${cors.allowed-headers}")
		@GetMapping("/{userID}")
		public User getUser(@PathVariable String userID) {
			return userService.getUserById(userID);
		}
		
		///GETTING USER BY USERNAME
		@CrossOrigin(origins = "${cors.allowed-origins}", allowedHeaders = "${cors.allowed-headers}")
		@GetMapping("/username/{userName}")
		public User getUserByUsername(@PathVariable String userName) {
		    return userService.getUserByUserName(userName);
		}

}
