package com.org.foodapp.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.org.foodapp.dao.FoodOrderDao;
import com.org.foodapp.dao.FoodProductDao;
import com.org.foodapp.dao.ItemDao;
import com.org.foodapp.dto.FoodOrder;
import com.org.foodapp.dto.FoodProduct;
import com.org.foodapp.dto.Item;
import com.org.foodapp.util.ResponseStructure;

@Service
public class ItemService {
    @Autowired
    ItemDao itemDao;
    @Autowired
    FoodOrderDao foodOrderDao;
    @Autowired
    FoodProductDao foodProductDao;
    
    public ResponseEntity<ResponseStructure<Item>> saveItem(Item item, int foodOrderId){
        Optional<FoodProduct> foodProductOptional = foodProductDao.getFoodProductById(item.getProductId());
        
        ResponseStructure<Item> structure=new ResponseStructure<>();
        item.setProductId(foodProductOptional.get().getId());
        item.setName(foodProductOptional.get().getName());
        item.setType(foodProductOptional.get().getType());
        item.setPrice(foodProductOptional.get().getPrice());
        System.out.println(foodProductOptional.get().getId());
        System.out.println(foodOrderId);
        Optional<FoodOrder> foodOptional = foodOrderDao.getFoodOrderById(foodOrderId);
        if(foodOptional.isEmpty()){
            System.out.print("No id found");
            
        }else {
          item.setFoodOrder(foodOptional.get());
          structure.setError(false);
            structure.setMessage("Item is added");
            structure.setData(itemDao.saveItem(item));
        }
                
        return new ResponseEntity<ResponseStructure<Item>>(structure, HttpStatus.OK);
        
    }
}