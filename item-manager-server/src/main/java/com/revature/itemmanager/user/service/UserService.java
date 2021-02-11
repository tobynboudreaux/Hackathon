package com.revature.itemmanager.user.service;

import com.revature.itemmanager.user.entity.User;

public interface UserService {
	
	public User saveUser(User addUser);
	
	public User loginWithUsernameAndPassword(User u);

}
