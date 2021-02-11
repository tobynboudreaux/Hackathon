package com.revature.item.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.item.models.Categories;
@Repository
public interface CategoriesRepo extends JpaRepository<Categories, Integer> {
	
	public Optional<Categories> findByCategoryId(int id);
	


}
