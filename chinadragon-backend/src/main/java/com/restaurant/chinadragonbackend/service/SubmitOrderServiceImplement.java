package com.restaurant.chinadragonbackend.service;

import org.springframework.stereotype.Service;

import com.restaurant.chinadragonbackend.dao.SubmitOrderDAO;

@Service
public class SubmitOrderServiceImplement implements SubmitOrderService {
	private SubmitOrderDAO submitOrderDAO;
	
	public SubmitOrderServiceImplement(SubmitOrderDAO theSubmitOrderDAO) {
		submitOrderDAO = theSubmitOrderDAO;
	}
}
