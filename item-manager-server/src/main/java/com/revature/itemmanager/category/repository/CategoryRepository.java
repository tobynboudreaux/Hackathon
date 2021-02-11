package com.revature.itemmanager.category.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.itemmanager.category.entity.Category;
@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> {
	
	public Optional<Category> findByCategoryId(int id);
	


}
