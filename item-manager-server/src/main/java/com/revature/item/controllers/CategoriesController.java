package com.revature.item.controllers;

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

import com.revature.item.models.Categories;
import com.revature.item.service.CategoriesService;
@RestController
@RequestMapping("/categories")
public class CategoriesController {
	
	@Autowired
	private CategoriesService categoriesService;
	
	@GetMapping
	public List<Categories> getAllCategories(){
		
		return categoriesService.findAll();
	}
	
	@GetMapping("/{id}")
	public Categories getCategoryById(@PathVariable int id) {
		return categoriesService.findCategoryById(id);
	}
	
	@PostMapping
	public ResponseEntity<Categories> createCategoryBy(@RequestBody Categories categories){
		try{
			return new ResponseEntity<Categories>(categoriesService.createCategory(categories), HttpStatus.CREATED);
		}
		catch(Exception e) {
			return new ResponseEntity<Categories>(HttpStatus.NOT_FOUND);
		}
	}
	@DeleteMapping("/{id}")
	public ResponseEntity<Categories> deleteCategoryBy(@PathVariable int id) {
		if(categoriesService.deleteCategory(id)) {
			return new ResponseEntity<Categories>(HttpStatus.OK);
		}
		else 
			return new ResponseEntity<Categories>(HttpStatus.NOT_MODIFIED);
	}
}	
	
