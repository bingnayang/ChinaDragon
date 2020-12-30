package com.restaurant.chinadragonbackend.service;

import java.util.List;

import com.restaurant.chinadragonbackend.entity.SubmitOrder;

public interface SubmitOrderService {

	int save(SubmitOrder theSubmitOrder);

	SubmitOrder findSubmitOrder(int orderId);

	void deleteAllCartOrder();

}
