package com.restaurant.chinadragonbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.restaurant.chinadragonbackend.dao.CartOrderDAO;
import com.restaurant.chinadragonbackend.entity.CartOrder;

@Service
public class CartOrderServiceImplement implements CartOrderService {
	private CartOrderDAO cartOrderDAO;

	@Autowired
	public CartOrderServiceImplement(CartOrderDAO theCartOrderDAO) {
		cartOrderDAO = theCartOrderDAO;
	}

	@Override
	@Transactional
	public void save(CartOrder theCartOrder) {
		cartOrderDAO.save(theCartOrder);
	}

	@Override
	@Transactional
	public List<CartOrder> findAll() {
		return cartOrderDAO.findAll();
	}
	
	
	
}
