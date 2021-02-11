package com.revature.item-manager.item.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.item-manager.item.entity.Item;
import com.revature.item-manager.item.repository.ItemRepository;

@Service
public class ItemService {
	@Autowired
	private ItemRepository itemRepository;
	
	public Item getItemById(Long id) {
		return itemRepository.getItemById(id);
	}
	
	public Item getItemByName(String name) {
		return itemRepository.getItemByName(name);
	}
	
	public Item saveItem(Item item) {
		return itemRepository.save(item);
	}
	
	public void deleteItemById(Long id) {
		itemRepository.deleteById(id);
	}
	
	public List<Item> getAllItems(){
		return itemRepository.findAll();
	}
	
	public Item editItem(Item itemObj, Long id) {
		Item item = itemRepository.getItemById(id);
		item.setName(itemObj.getName());
		item.setQuantity(itemObj.getQuantity());
		item.setDescription(itemObj.getDescription());
		item.setCategoryId(itemObj.getCategoryId());
		item.setUserId(itemObj.getUserId());
		itemRepository.save(item);
		return item;
	}
}
