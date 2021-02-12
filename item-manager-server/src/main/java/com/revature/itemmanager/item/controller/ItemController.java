package com.revature.itemmanager.item.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.itemmanager.item.entity.Item;
import com.revature.itemmanager.item.service.ItemService;

@RestController
@RequestMapping("/items")
@CrossOrigin
public class ItemController {
	@Autowired
	private ItemService itemService;
	
	@GetMapping("")
	public List<Item> getAllItems() {
		return itemService.getAllItems();
	}
	
	@GetMapping("/{id}")
	public Item getItemById(@PathVariable("id") Long id) {
		return itemService.getItemById(id);
	}
	
	@PostMapping("")
	public Item saveItem(@RequestBody Item item) {
		return itemService.saveItem(item);
	}
	
	@PutMapping("/{id}")
	public Item editItem(@PathVariable("id") Long id, @RequestBody Item item) {
		return itemService.editItem(item, id);
	}
	
	@DeleteMapping("/{id}")
	public void deleteItemById(@PathVariable("id") Long id) {
		itemService.deleteItemById(id);
	}
	
	
}
