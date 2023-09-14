package com.org.foodapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.org.foodapp.dto.User;
import com.org.foodapp.service.UserService;
import com.org.foodapp.util.ResponseStructure;

@RestController
@CrossOrigin
public class UserController {
	
	@Autowired
	UserService userService;
	
	@PostMapping("/user")
	public ResponseEntity<ResponseStructure<User>> saveUser(@RequestBody User user){
		return userService.saveUser(user);
	}
	@PostMapping("/login")
	public ResponseEntity<ResponseStructure<User>> login(@RequestBody User user) {
		return userService.login(user.getEmail(),user.getPassword());
	}
	@GetMapping("/user/{userId}")
	public ResponseEntity<ResponseStructure<User>> getUserById(@PathVariable int userId) {
		return userService.getUserById(userId);
	}
	@GetMapping("/user")
	public ResponseEntity<ResponseStructure<User>> getAllUsers(@PathVariable int userId) {
		return userService.getUserById(userId);
	}
	@GetMapping("/getallstaffs")
	public ResponseEntity<ResponseStructure<List<User>>> getAllStaffs() {
		return userService.getAllStaffs();
	}
	
	@GetMapping("/getallmanagers")
	public ResponseEntity<ResponseStructure<List<User>>> getAllManagers() {
		return userService.getAllManagers();
	}


	@PutMapping("/user")
	public ResponseEntity<ResponseStructure<User>> updateUser(@RequestParam int id,@RequestBody User user){
		return userService.updateUser(id,user);
	}

	@DeleteMapping("/user/{userId}")
	public ResponseEntity<ResponseStructure<String>> deleteUser(@PathVariable int userId){
		return userService.deleteUser(userId);
	} 

}
