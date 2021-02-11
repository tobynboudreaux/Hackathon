package com.revature.item.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.revature.item.models.Categories;
import com.revature.item.repo.CategoriesRepo;

public class CategoriesService {
	
	@Autowired
	private CategoriesRepo categoriesRepo;
	
	public List<Categories> findAll(){
		return categoriesRepo.findAll();
	}
	
	public Categories findCategoryById(int id) {
		
		Optional<Categories> category = categoriesRepo.findByCategoryId(id);
		if(category.isPresent()){ 
			return category.get();
		}else {
			return null;
		}
	}
	
	public Categories createCategory(Categories category) {
		return categoriesRepo.save(category);
	}
	
	public boolean deleteCategory(int id) {
		
		Optional<Categories> category = categoriesRepo.findByCategoryId(id);
		if(category.isPresent()){ 
			categoriesRepo.delete(category.get());
			return true;
		}else {
			return false;
		}
	}
//	public boolean updateCategory(int id) {
//		Optional<Categories> category = categoriesRepo.findByCategoryId(id);
//		if(category.isPresent()){ 
//			
//		//	categoriesRepo.save(null)
//			return true;
//		}else {
//			return false;
//		}
//		
//	
//	}
//	
	
	
	

}
