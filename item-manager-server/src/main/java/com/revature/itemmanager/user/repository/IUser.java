package com.revature.itemmanager.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.itemmanager.user.entity.User;

public interface IUser extends JpaRepository<User, Integer> {
	
	public User findUserByUsernameAndPassword(String username, String password);

}
