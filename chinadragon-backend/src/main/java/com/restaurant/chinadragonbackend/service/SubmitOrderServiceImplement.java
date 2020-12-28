package com.restaurant.chinadragonbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.restaurant.chinadragonbackend.dao.SubmitOrderDAO;
import com.restaurant.chinadragonbackend.entity.SubmitOrder;

@Service
public class SubmitOrderServiceImplement implements SubmitOrderService {
	private SubmitOrderDAO submitOrderDAO;
	
	@Autowired
	public SubmitOrderServiceImplement(SubmitOrderDAO theSubmitOrderDAO) {
		submitOrderDAO = theSubmitOrderDAO;
	}

	@Override
	@Transactional
	public void save(SubmitOrder theSubmitOrder) {
		submitOrderDAO.save(theSubmitOrder);
	}
}
