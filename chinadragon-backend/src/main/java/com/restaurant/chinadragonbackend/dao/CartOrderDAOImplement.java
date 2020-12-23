package com.restaurant.chinadragonbackend.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.stereotype.Repository;

import com.restaurant.chinadragonbackend.entity.CartOrder;

@Repository
public class CartOrderDAOImplement implements CartOrderDAO {
	// Define field for entitymanager
	private EntityManager entityManager;
	
	public CartOrderDAOImplement(EntityManager theEntityManager){
		entityManager = theEntityManager;
	}

	@Override
	public void save(CartOrder theCartOrder) {
		// Get the current hibernate session
		Session currentSession = entityManager.unwrap(Session.class);
		// Save rates
		currentSession.saveOrUpdate(theCartOrder);
	}

	@Override
	public List<CartOrder> findAll() {
		// Get the current hibernate session
		Session currentSession = entityManager.unwrap(Session.class);
		
		// Create a query
		// Using native Hibernate API
		Query<CartOrder> theQuery = currentSession.createQuery("from CartOrder",CartOrder.class);
		
		// Execute query and get result list
		List<CartOrder> cartOrders = theQuery.getResultList();
		
		// Return the result
		return cartOrders;
		
	}
	
	
}
