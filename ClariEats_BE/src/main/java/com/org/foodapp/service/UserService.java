
package com.org.foodapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.org.foodapp.dao.MenuDao;
import com.org.foodapp.dao.UserDao;
import com.org.foodapp.dto.Menu;
import com.org.foodapp.dto.User;
import com.org.foodapp.util.ResponseStructure;


@Service
public class UserService {
	
	@Autowired
	UserDao userDao;

	@Autowired
	MenuDao menuDao;
	
	public ResponseEntity<ResponseStructure<User>> saveUser(User user) {
		ResponseStructure<User> structure = new ResponseStructure<>();
		
		// If the user being added is a Branch Manager
		if (user.getRole().equals("Manager")) {
			// We assign an empty Menu by default to the user
			Menu menu = new Menu();
			// set the user of the menu
			menu.setUser(user);
			// Add the menu to the MenuDao as well
			menu = menuDao.saveMenu(menu);
			// Assign the menu to the branch manager
			user.setMenu(menu);
		}
		
		structure.setError(false);
		structure.setMessage(user.getName() + " saved");
		structure.setData(userDao.saveUser(user));
		return new ResponseEntity<ResponseStructure<User>>(structure, HttpStatus.OK);
	}
	
	public ResponseEntity<ResponseStructure<User>> getUserById(int id){
		ResponseStructure<User> structure = new ResponseStructure<>();
		Optional<User> optional = userDao.getUserById(id);
		if(optional.isEmpty()) {
			System.out.println("No such id is found");
		}
		else {
			structure.setError(false);
			structure.setMessage("User Found");
			structure.setData(optional.get());
		}
		
		return new ResponseEntity<ResponseStructure<User>>(structure, HttpStatus.OK);
	}
	
	public ResponseEntity<ResponseStructure<List<User>>> getAllStaffs(){
		ResponseStructure<List<User>> structure = new ResponseStructure<>();
			structure.setError(false);
			structure.setMessage("User Found");
			structure.setData(userDao.getAllStaffs());
		
		return new ResponseEntity<ResponseStructure<List<User>>>(structure, HttpStatus.OK);
	}
	
// 	public ResponseEntity<ResponseStructure<List<User>>> getUsers(){
// 		ResponseStructure<List<User>> structure = new ResponseStructure<>();
// 			structure.setError(false);
// 			structure.setMessage("User Found");
// 			structure.setData(userDao.getAllUsers());
		
// 		return new ResponseEntity<ResponseStructure<List<User>>>(structure, HttpStatus.OK);
// 		//ResponseStructure<List<User>> structure=new ResponseStructure<List<User>>();
// //		List<User> list = userDao.getAllUsers();
// //		if(list.isEmpty()) {
// //			structure.setError(true);
// //			structure.setMessage("User not Found");
// //			structure.setData(null);
// //		}else {
// //			structure.setError(false);
// //			structure.setMessage("Users found");
// //			structure.setData(list);
// //		}
// //		return structure;
// 	}
	
	public ResponseEntity<ResponseStructure<User>> login(String email, String password){
		ResponseStructure<User> structure = new ResponseStructure<>();
		User user = userDao.login(email, password);
		if(user!=null) {
			structure.setError(false);
			structure.setMessage("Login Successful");
			structure.setData(user);
		}else {
			structure.setError(true);
			structure.setMessage("Invalid credentials");
			structure.setData(user);
		}
		return new ResponseEntity<ResponseStructure<User>>(structure, HttpStatus.OK);
	}
  
  public ResponseEntity<ResponseStructure<List<User>>> getAllManagers(){
		ResponseStructure<List<User>> responseStructure = new ResponseStructure<>();
			responseStructure.setError(false);
			responseStructure.setMessage("User Found");
			responseStructure.setData(userDao.getAllManagers());
		
		return new ResponseEntity<ResponseStructure<List<User>>>(responseStructure, HttpStatus.OK);
	}
	
	public ResponseEntity<ResponseStructure<User>> updateUser(int userid, User user) {
		User existingUser = userDao.getUserById(userid).get();
		BeanUtils.copyProperties(user, existingUser, "id", "password" ,"role", "menu");
		ResponseStructure<User> responseStructure = new ResponseStructure<>();
		responseStructure.setError(true);
		responseStructure.setMessage("user updated");
		responseStructure.setData(userDao.saveUser(existingUser));
		return new ResponseEntity<ResponseStructure<User>>(responseStructure,HttpStatus.OK);
	}
	
// 	public ResponseEntity<ResponseStructure<User>> updateUser(User user){	
// 		ResponseStructure<User> structure = new ResponseStructure<>();
// 		int existingUserId = user.getId();
// 		User existingUser = userDao.getUserById(existingUserId).get();
// //		Menu menu = existingUser.getMenu();
// //		    user.setMenu(menu);
// //			structure.setError(false);
// //			structure.setMessage("Updated Successfully");
// //			structure.setData(userDao.updateUser(user));
			
// 		if(existingUser.getRole().equals("BranchManager")) {
// 			Menu menu = existingUser.getMenu();
// 		    user.setMenu(menu);
// 		}
// 		structure.setError(false);
// 		structure.setMessage("User updated");
// 		structure.setData(userDao.updateUser(user));
// 		return new ResponseEntity<ResponseStructure<User>>(structure, HttpStatus.OK);
// 	}
	
	public ResponseEntity<ResponseStructure<String>> deleteUser(int id){
		ResponseStructure<String> structure = new ResponseStructure<>();
		Optional<User> optional = userDao.getUserById(id);
		if(optional.isEmpty()) {
			structure.setError(true);
			structure.setMessage("No user with that id");
		}else {
			structure.setError(false);
			structure.setMessage("User Deleted");
			userDao.deleteUser(optional.get());
		}
		return new ResponseEntity<ResponseStructure<String>>(structure, HttpStatus.OK);
	}
	
}
