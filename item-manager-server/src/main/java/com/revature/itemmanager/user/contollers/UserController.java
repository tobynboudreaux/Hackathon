package com.revature.itemmanager.user.contollers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.itemmanager.user.entity.User;
import com.revature.itemmanager.user.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*")
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
		User user = userService.loginWithUsernameAndPassword(u);
		if(user == null)
			return new ResponseEntity<User>(HttpStatus.UNAUTHORIZED);
		else
			return new ResponseEntity<User>(HttpStatus.OK);
		
	}
}
