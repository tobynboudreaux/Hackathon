package com.revature.item.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.item.entity.Items;
import com.revature.item.repository.ItemsRepository;

@Service
public class ItemsService {
	@Autowired
	private ItemsRepository itemsRepository;
	
	public Items getItemById(Long id) {
		return itemsRepository.getItemById(id);
	}
	
	public Items getItemByName(String name) {
		return itemsRepository.getItemByName(name);
	}
	
	public Items saveItem(Items items) {
		return itemsRepository.save(items);
	}
	
	public void deleteItemById(Long id) {
		itemsRepository.deleteById(id);
	}
	
	public List<Items> getAllItems(){
		return itemsRepository.findAll();
	}
	
	public Items editItem(Items itemObj, Long id) {
		Items item = itemsRepository.getItemById(id);
		item.setName(itemObj.getName());
		item.setQuantity(itemObj.getQuantity());
		item.setDescription(itemObj.getDescription());
		item.setCategoryId(itemObj.getCategoryId());
		item.setUserId(itemObj.getUserId());
		return item;
	}
}
