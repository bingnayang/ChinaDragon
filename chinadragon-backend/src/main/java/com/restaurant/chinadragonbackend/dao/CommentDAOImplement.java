package com.restaurant.chinadragonbackend.dao;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

@Repository
public class CommentDAOImplement implements CommentDAO {
	// Define field for entitymanager
	private EntityManager entityManager;
	
	public CommentDAOImplement(EntityManager theEntityManager){
		entityManager = theEntityManager;
	}
	
	
	
}
