package com.restaurant.chinadragonbackend.service;

import java.util.List;

import com.restaurant.chinadragonbackend.entity.CartOrder;

public interface CartOrderService {

	void save(CartOrder theCartOrder);

	List<CartOrder> findAll();

}
