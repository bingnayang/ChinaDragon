package com.restaurant.chinadragonbackend.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.restaurant.chinadragonbackend.entity.CartOrder;
import com.restaurant.chinadragonbackend.service.CartOrderService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class CartOrderRESTController {
	private CartOrderService cartOrderService;
	
	@Autowired
	public CartOrderRESTController(CartOrderService theCartOrderService) {
		cartOrderService = theCartOrderService;
	}
	
	@PostMapping("/cart")
	public CartOrder addCartOrder(@RequestBody CartOrder theCartOrder) {
		theCartOrder.setId(0);
		cartOrderService.save(theCartOrder);
		return theCartOrder;
	}
	
	@GetMapping("/cart/{theItemName}/{theItemSize}")
	public int findOrderItem(@PathVariable String theItemName, @PathVariable String theItemSize) {
		try {
			 return cartOrderService.findOrderItem(theItemName,theItemSize);			
		}catch (Exception e) {
			return -1;
		}
	}
	
	@GetMapping("/cart")
	public List<CartOrder> findAllCartOrder(){
		return cartOrderService.findAll();
	}
	
	@GetMapping("/cart/order-item")
	public long getCartOrderCountItem(){
		return cartOrderService.findItemAmount();
	}
	
	@GetMapping("/cart/order-subtotal")
	public double getCartOrderTotal(){
		return cartOrderService.calculateOrderTotal();
	}
	
	@PutMapping("/cart")
	public CartOrder updateOrderItem(@RequestBody CartOrder theCartOrder) {
		cartOrderService.save(theCartOrder);
		return theCartOrder;
	}
	
	@GetMapping("/cart/{itemId}")
	public CartOrder getOrderItemById(@PathVariable int itemId) {
		CartOrder theCartOrder = cartOrderService.findItemById(itemId);
		
		if(theCartOrder == null) {
			throw new RuntimeException("Cart Order item Id not found - "+itemId);
		}
		
		return theCartOrder;
	}
	
	@DeleteMapping("/cart/{itemId}")
	public void deleteOrderItem(@PathVariable int itemId) {
		cartOrderService.deleteItem(itemId);
	}

	
	
}
