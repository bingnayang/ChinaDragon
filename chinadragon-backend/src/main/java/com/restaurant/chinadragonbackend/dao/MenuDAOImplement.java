package com.restaurant.chinadragonbackend.dao;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

@Repository
public class MenuDAOImplement implements MenuDAO {
	
	// Define field for entitymanager
	private EntityManager entityManager;
	
	public MenuDAOImplement(EntityManager theEntityManager){
		entityManager = theEntityManager;
	}
	
	
}
