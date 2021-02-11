package com.revature.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.entities.User;

public interface IUser extends JpaRepository<User, Integer> {
	
	public User findUserByUsernameAndPassword(String username, String password);

}
