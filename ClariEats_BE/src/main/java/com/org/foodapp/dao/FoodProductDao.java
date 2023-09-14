package com.org.foodapp.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.org.foodapp.dto.FoodProduct;
import com.org.foodapp.repository.FoodProductRepository;

@Repository
public class FoodProductDao {
	
	@Autowired
	FoodProductRepository foodProductRepo;
	
	
	public FoodProduct saveFoodProduct(FoodProduct foodProduct) {
		return foodProductRepo.save(foodProduct);
	}
	
	public Optional<FoodProduct> getFoodProductById(int id){
		return foodProductRepo.findById(id);
	}
	public List<FoodProduct> getFoodProductsInMenu(int menuId){
		return foodProductRepo.getFoodProductsInMenu(menuId);
	}
	
	public List<FoodProduct> getAllFoodProduct(){
        return foodProductRepo.findAll();
    }
	
	public void deleteFoodProduct(int id) {
		foodProductRepo.deleteById(id);
	}

}
