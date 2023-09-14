package com.org.foodapp.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.org.foodapp.dto.FoodOrder;
import com.org.foodapp.repository.FoodOrderRepository;

@Repository
public class FoodOrderDao {
	
	@Autowired
	FoodOrderRepository foodOrderRepository;
	
	public FoodOrder saveFoodOrder(FoodOrder foodOrder) {
		return foodOrderRepository.save(foodOrder);
	}
	
	public Optional<FoodOrder> getFoodOrderById(int id){
		return foodOrderRepository.findById(id);
	}
	public List<FoodOrder> getFoodOrder() {
		return foodOrderRepository.findAll();
	}
	
	public FoodOrder updateFoodOrder(FoodOrder foodOrder) {
		return foodOrderRepository.save(foodOrder);
	}
	
	public void deleteFoodOrderById(int id) {
		foodOrderRepository.deleteById(id);
	}

}
