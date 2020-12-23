package com.restaurant.chinadragonbackend.dao;

import javax.persistence.EntityManager;

import org.hibernate.Session;
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
	
	
}
