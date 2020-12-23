package com.restaurant.chinadragonbackend.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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
	
	@GetMapping("/cart")
	public List<CartOrder> findAllCartOrder(){
		return cartOrderService.findAll();
	}
	
	@GetMapping("/cart/order-item")
	public long getCartOrderCountItem(){
		return cartOrderService.findItemAmount();
	}
}
