package com.restaurant.chinadragonbackend.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.restaurant.chinadragonbackend.entity.OrderItem;
import com.restaurant.chinadragonbackend.entity.SubmitOrder;
import com.restaurant.chinadragonbackend.service.SubmitOrderService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class SubmitOrderRESTController {
	private SubmitOrderService submitOrderService;

	@Autowired
	public SubmitOrderRESTController(SubmitOrderService theSubmitOrderService) {
		submitOrderService = theSubmitOrderService;
	}
	
	@PostMapping("/submit")
	public SubmitOrder saveOrder(@RequestBody SubmitOrder theSubmitOrder) {
		System.out.println(theSubmitOrder.toString());
		
		theSubmitOrder.setId(0);
		submitOrderService.save(theSubmitOrder);
		return theSubmitOrder;
	}
	
}
