package com.revature.service;

import com.revature.entities.User;

public interface UserService {
	
	public User saveUser(User addUser);
	
	public User loginWithUsernameAndPassword(User u);

}
