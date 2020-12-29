package com.restaurant.chinadragonbackend.dao;

import java.util.List;

import com.restaurant.chinadragonbackend.entity.SubmitOrder;

public interface SubmitOrderDAO {

	int save(SubmitOrder theSubmitOrder);

	SubmitOrder findSubmitOrder(int orderId);

}
