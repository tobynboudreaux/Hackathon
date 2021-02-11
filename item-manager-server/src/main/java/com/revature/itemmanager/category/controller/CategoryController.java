package com.revature.itemmanager.category.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.itemmanager.category.entity.Category;
import com.revature.itemmanager.category.service.CategoryService;

@RestController
@RequestMapping("/category")
public class CategoryController {
	
	@Autowired
	private CategoryService categoryService;
	
	@GetMapping("/")
	public List<Category> getAllCategory(){
		
		return categoryService.findAll();
	}
	
	@GetMapping("/{id}")
	public Category getCategoryById(@PathVariable int id) {
		return categoryService.findCategoryById(id);
	}
	
	@PostMapping("/")
	public ResponseEntity<Category> createCategoryBy(@RequestBody Category category){
		try{
			return new ResponseEntity<Category>(categoryService.createCategory(category), HttpStatus.CREATED);
		}
		catch(Exception e) {
			return new ResponseEntity<Category>(HttpStatus.NOT_FOUND);
		}
	}
	@DeleteMapping("/{id}")
	public ResponseEntity<Category> deleteCategoryBy(@PathVariable int id) {
		if(categoryService.deleteCategory(id)) {
			return new ResponseEntity<Category>(HttpStatus.OK);
		}
		else 
			return new ResponseEntity<Category>(HttpStatus.NOT_MODIFIED);
	}
}	
	
