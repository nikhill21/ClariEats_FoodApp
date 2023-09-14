package com.org.foodapp.repository;

// import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.org.foodapp.dto.Menu;

public interface MenuRepository extends JpaRepository<Menu, Integer>{
  @Query("SELECT m from Menu m WHERE user_id= :user_id")
  Menu getMenuByManagerId(@Param("user_id") int user_id);
}
