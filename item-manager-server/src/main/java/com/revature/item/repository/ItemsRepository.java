package com.revature.item.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.item.entity.Items;

@Repository
public interface ItemsRepository extends JpaRepository<Items, Long>{
	public Items getItemById(Long id);
	public Items getItemByName(String name);
	public Items save(Items items);
	public Items deleteItemById(Long id);
	public List<Items> findAll();

}
