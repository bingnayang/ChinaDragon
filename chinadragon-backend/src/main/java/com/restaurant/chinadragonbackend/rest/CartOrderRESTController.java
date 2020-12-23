package com.restaurant.chinadragonbackend.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
	
}
