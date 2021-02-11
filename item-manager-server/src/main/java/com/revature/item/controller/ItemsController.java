package com.revature.item.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.item.entity.Items;
import com.revature.item.service.ItemsService;

@RestController
@RequestMapping("/items")
public class ItemsController {
	@Autowired
	private ItemsService itemsService;
	
	@GetMapping("")
	public List<Items> getAllItems() {
		return itemsService.getAllItems();
	}
	
	@GetMapping("/{id}")
	public Items getItemById(@PathVariable("id") Long id) {
		return itemsService.getItemById(id);
	}
	
	@PostMapping("")
	public Items saveItem(@RequestBody Items items) {
		return itemsService.saveItem(items);
	}
	
	@PutMapping("/{id}")
	public Items editItem(@PathVariable("id") Long id, @RequestBody Items items) {
		return itemsService.editItem(items, id);
	}
	
	@DeleteMapping("/{id}")
	public void deleteItemById(@PathVariable("id") Long id) {
		itemsService.deleteItemById(id);
	}
	
	
}
