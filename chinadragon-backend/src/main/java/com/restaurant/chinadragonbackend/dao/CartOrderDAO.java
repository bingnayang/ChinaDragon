package com.restaurant.chinadragonbackend.dao;

import java.util.List;

import com.restaurant.chinadragonbackend.entity.CartOrder;

public interface CartOrderDAO {

	void save(CartOrder theCartOrder);

	List<CartOrder> findAll();

	long findItemAmount();

	double calculateOrderTotal();

	boolean findOrderItem(int theCartOrderId);

}
