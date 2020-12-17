package com.restaurant.chinadragonbackend.dao;

import java.util.List;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import com.restaurant.chinadragonbackend.entity.Menu;

@Repository
public class MenuDAOImplement implements MenuDAO {
	
	// Define field for entitymanager
	private EntityManager entityManager;
	
	public MenuDAOImplement(EntityManager theEntityManager){
		entityManager = theEntityManager;
	}

	@Override
	public List<Menu> findAll() {
		// Get the current hibernate session
		Session currentSession = entityManager.unwrap(Session.class);
		
		// Create a query
		// Using native Hibernate API
		Query<Menu> theQuery = currentSession.createQuery("from Menu",Menu.class);
		
		// Execute query and get result list
		List<Menu> menus = theQuery.getResultList();
		
		// Return the result
		return menus;
	}
	
	
}
