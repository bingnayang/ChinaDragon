package com.restaurant.chinadragonbackend.dao;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import com.restaurant.chinadragonbackend.entity.Comment;
import org.hibernate.Session;


@Repository
public class CommentDAOImplement implements CommentDAO {
	// Define field for entitymanager
	private EntityManager entityManager;
	
	public CommentDAOImplement(EntityManager theEntityManager){
		entityManager = theEntityManager;
	}

	@Override
	public void save(Comment theComment) {
		// Get the current hibernate session
		Session currentSession = entityManager.unwrap(Session.class);
		// Save rates
		currentSession.saveOrUpdate(theComment);
	}
}
