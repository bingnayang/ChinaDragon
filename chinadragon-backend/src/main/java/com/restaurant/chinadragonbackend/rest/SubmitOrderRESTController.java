package com.restaurant.chinadragonbackend.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
	
	
	
}
