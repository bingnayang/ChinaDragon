package com.restaurant.chinadragonbackend.dao;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

@Repository
public class CartOrderDAOImplement implements CartOrderDAO {
	// Define field for entitymanager
	private EntityManager entityManager;
	
	public CartOrderDAOImplement(EntityManager theEntityManager){
		entityManager = theEntityManager;
	}
	
}
