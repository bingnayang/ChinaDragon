package com.restaurant.chinadragonbackend.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
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
	public int saveOrder(@RequestBody SubmitOrder theSubmitOrder) {
		theSubmitOrder.setId(0);
		int id = submitOrderService.save(theSubmitOrder);
		System.out.println("Insert Id: "+id);
		return id;
	}	
	
	@GetMapping("/submit/{orderId}")
	public SubmitOrder findSubmitOrderById(@PathVariable int orderId) {
		SubmitOrder theSubmitOrder = submitOrderService.findSubmitOrder(orderId);
		if(theSubmitOrder == null) {
			throw new RuntimeException("Submited Order not found");
		}
		return theSubmitOrder;
	}
	
	
}
