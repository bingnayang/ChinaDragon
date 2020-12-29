package com.restaurant.chinadragonbackend.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.springframework.stereotype.Repository;
import org.hibernate.query.Query;
import com.restaurant.chinadragonbackend.entity.SubmitOrder;

@Repository
public class SubmitOrderDAOImplement implements SubmitOrderDAO {
	// Define field for entitymanager
	private EntityManager entityManager;
	
	public SubmitOrderDAOImplement(EntityManager theEntityManager){
		entityManager = theEntityManager;
	}
	
	@Override
	public int save(SubmitOrder theSubmitOrder) {
		// Get the current hibernate session
		Session currentSession = entityManager.unwrap(Session.class);
		int id = (Integer)currentSession.save(theSubmitOrder);
		return id;
	}

}
