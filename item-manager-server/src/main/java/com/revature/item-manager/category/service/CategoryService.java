package com.revature.item-manager.category.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.revature.item-manager.category.service.Category;
import com.revature.item-manager.category.repository.CategoryRepository;

public class CategoryService {
	
	@Autowired
	private CategoryRepository categoryRepo;
	
	public List<Category> findAll(){
		return categoryRepo.findAll();
	}
	
	public Category findCategoryById(int id) {
		
		Optional<Category> category = categoryRepo.findByCategoryId(id);
		if(category.isPresent()){ 
			return category.get();
		}else {
			return null;
		}
	}
	
	public Category createCategory(Category category) {
		return categoryRepo.save(category);
	}
	
	public boolean deleteCategory(int id) {
		
		Optional<Category> category = categoryRepo.findByCategoryId(id);
		if(category.isPresent()){ 
			categoryRepo.delete(category.get());
			return true;
		}else {
			return false;
		}
	}
//	public boolean updateCategory(int id) {
//		Optional<Category> category = categoryRepo.findByCategoryId(id);
//		if(category.isPresent()){ 
//			
//		//	categoryRepo.save(null)
//			return true;
//		}else {
//			return false;
//		}
//		
//	
//	}
//	
	
	
	

}
