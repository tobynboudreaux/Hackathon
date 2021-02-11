package com.revature.item-manager.item.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.item-manager.item.entity.Item;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long>{
	public Item getItemById(Long id);
	public Item getItemByName(String name);
	public Item save(Item item);
	public Item deleteItemById(Long id);
	public List<Item> findAll();

}
