package com.restaurant.chinadragonbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.restaurant.chinadragonbackend.dao.CartOrderDAO;

@Service
public class CartOrderServiceImplement implements CartOrderService {
	private CartOrderDAO cartOrderDAO;

	@Autowired
	public CartOrderServiceImplement(CartOrderDAO theCartOrderDAO) {
		cartOrderDAO = theCartOrderDAO;
	}
	
	
	
}
