package com.org.foodapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.org.foodapp.dto.FoodProduct;
import com.org.foodapp.service.FoodProductService;
import com.org.foodapp.util.ResponseStructure;

@RestController
@CrossOrigin
public class FoodProductController {
	
	@Autowired
	FoodProductService foodProductService;
	
	@PostMapping("/foodproduct/{menuId}")
	public ResponseEntity<ResponseStructure<FoodProduct>> saveFoodProduct(@RequestBody FoodProduct foodProduct, @PathVariable int menuId){
		return foodProductService.savefFoodProduct(foodProduct, menuId);
	}
	@GetMapping("/foodproduct/{menuId}")
	public ResponseEntity<ResponseStructure<List<FoodProduct>>> getFoodProductsInMenu(@PathVariable int menuId){
		return foodProductService.getFoodProductsInMenu(menuId);
	}
	
	@GetMapping("/foodproduct")
    public ResponseEntity<ResponseStructure<List<FoodProduct>>> getAllFoodProduct() {
        return foodProductService.getAllFoodProduct();
    }
	
	@DeleteMapping("/foodproduct/{foodProdId}")
	public ResponseEntity<ResponseStructure<String>> deleteProduct(@PathVariable int foodProdId){
		return foodProductService.deleteFoodProduct(foodProdId);
	}	

}
