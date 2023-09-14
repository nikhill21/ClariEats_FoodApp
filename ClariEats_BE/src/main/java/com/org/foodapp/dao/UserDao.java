package com.org.foodapp.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.org.foodapp.dto.User;
import com.org.foodapp.repository.UserRepository;

@Repository
public class UserDao {
	
	@Autowired
	UserRepository userRepo;
	
	public User saveUser(User user) {
		return userRepo.save(user);
	}
	
	public Optional<User> getUserById(int id) {
		return userRepo.findById(id);
	}
	
	public List<User> getAllStaffs(){
		return userRepo.getAllStaffs("Staff");
	}

	public List<User> getAllManagers(){
		return userRepo.getAllManagers("Manager");
	}
	
	public User login(String email, String password) {
		return userRepo.getByEmailAndPassword(email, password);
	}
	
	public User updateUser(User user) {
		return userRepo.save(user);
	}
	public void deleteUser(User user) {
		 userRepo.delete(user);
	}
	

}
