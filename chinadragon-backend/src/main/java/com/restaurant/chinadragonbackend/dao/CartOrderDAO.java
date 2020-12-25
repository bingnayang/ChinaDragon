package com.restaurant.chinadragonbackend.dao;

import java.util.List;

import com.restaurant.chinadragonbackend.entity.CartOrder;

public interface CartOrderDAO {

	void save(CartOrder theCartOrder);

	List<CartOrder> findAll();

	long findItemAmount();

	double calculateOrderTotal();

	int findOrderItem(String theItemName, String theItemSize);

	CartOrder findItemById(int itemId);

	void deleteItem(int itemId);

}
