package com.org.foodapp.controller;

import java.util.List;

// import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.org.foodapp.dto.FoodOrder;
import com.org.foodapp.service.FoodOrderService;
import com.org.foodapp.util.ResponseStructure;

@RestController
@CrossOrigin
public class FoodOrderController {
	
	@Autowired
	FoodOrderService foodOrderService;
	
	@PostMapping("/foodorder/{staffId}")
	public ResponseEntity<ResponseStructure<FoodOrder>> saveFoodOrder(@RequestBody FoodOrder foodOrder, @PathVariable int staffId){
		return foodOrderService.saveFoodOrder(foodOrder, staffId );
	}
	//FoodOrder By Staff ID - gives orders placed by staff
	@GetMapping("/foodorder/{userId}")
	public ResponseEntity<ResponseStructure<List<FoodOrder>>> getFoodOrder(@PathVariable int userId) {
		return foodOrderService.getFoodOrder(userId); 
	}
	//FoodOrder by FoodOrder ID
	@GetMapping("/foodorderbyitsid/{foodOrderId}")
	public ResponseEntity<ResponseStructure<FoodOrder>> getFoodOrderByItsId(@PathVariable int foodOrderId) {
		return foodOrderService.getFoodOrderByItsId(foodOrderId); 
	}
	
	@PutMapping("/foodorder")
	public ResponseEntity<ResponseStructure<FoodOrder>> updateFoodOrder(@RequestBody FoodOrder foodOrder) {
		return foodOrderService.updateFoodOrder(foodOrder);
	}
	
	@DeleteMapping("/foodorder/{id}")
	public ResponseEntity<ResponseStructure<String>> deleteFoodOrderById(@PathVariable int id) {
		return foodOrderService.deleteFoodOrderById(id);
	}
	

}
