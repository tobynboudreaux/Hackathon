package com.revature.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.dao.IUser;
import com.revature.entities.User;


@Service
public class UserServiceImplementation implements UserService {
	
	private IUser user;
	
	@Autowired
	public UserServiceImplementation(IUser user) {
		this.user = user;
	}

	@Override
	public User saveUser(User addUser) {
		
		return user.saveAndFlush(addUser);
	}

	@Override
	public User loginWithUsernameAndPassword(User u) {
		
		return user.findUserByUsernameAndPassword(u.getUsername(), u.getPassword());
	}

}
