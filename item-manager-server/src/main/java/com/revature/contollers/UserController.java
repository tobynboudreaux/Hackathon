package com.revature.contollers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.entities.User;
import com.revature.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
	
	private UserService userService;
	
	@Autowired
	public UserController(UserService userService) {
		this.userService = userService;
	}
	
	@PostMapping
	public ResponseEntity<User> saveNewUser(@RequestBody User u){
		return new ResponseEntity<User>(userService.saveUser(u), HttpStatus.CREATED);
		
	}
	
	@PostMapping("/auth")
	public ResponseEntity<User> findUser(@RequestBody User u){
		//Here we call database to get data 
		return new ResponseEntity<User>(userService.loginWithUsernameAndPassword(u), HttpStatus.CREATED);
		
	}
}
