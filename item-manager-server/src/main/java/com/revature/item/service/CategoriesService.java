package com.revature.item.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.item.models.Categories;
import com.revature.item.repo.CategoriesRepo;

@Service
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
	public Categories updateCategory(Categories categry) {
		Optional<Categories> category = categoriesRepo.findByCategoryId(categry.getCategoryId());
		if(category.isPresent()){ 
			category.get().setCategoryName(categry.getCategoryName());	
			return categoriesRepo.save(category.get());
		}else {
			return null;
		}
	}
}
