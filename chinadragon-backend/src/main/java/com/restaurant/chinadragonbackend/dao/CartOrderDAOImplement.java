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

	@Override
	public long findItemAmount() {
		Session currentSession = entityManager.unwrap(Session.class);

		Query theQuery = currentSession.createQuery("SELECT sum(quantity) from CartOrder", Long.class);
		Long itemCount = (Long)theQuery.uniqueResult();
		if(itemCount == null) {
			return 0;
		}
		return itemCount;
	}

	@Override
	public double calculateOrderTotal() {
		Session currentSession = entityManager.unwrap(Session.class);

		Query theQuery = currentSession.createQuery("SELECT sum(price * quantity) from CartOrder", Double.class);
		Double orderSubTotal = (Double)theQuery.uniqueResult();
		if( orderSubTotal == null) {
			return 0;
		}
		return orderSubTotal;
	}

	@Override
	public int findOrderItem(String theItemName, String theItemSize) {
		// Get the current hibernate session
		Session currentSession = entityManager.unwrap(Session.class);

		Query theQuery = currentSession.createQuery("SELECT id from CartOrder where name=:name AND size=:size", Integer.class);
		theQuery.setParameter("name",theItemName);
		theQuery.setParameter("size",theItemSize);
		Integer result = (Integer) theQuery.uniqueResult();

		return result;

	}

	@Override
	public CartOrder findItemById(int itemId) {
		// Get the current hibernate session
		Session currentSession = entityManager.unwrap(Session.class);
		
		CartOrder theCartOrderItem = currentSession.get(CartOrder.class, itemId);
		
		// Return the result
		return theCartOrderItem;
	}

	@Override
	public void deleteItem(int itemId) {
		// Get the current hibernate session
		Session currentSession = entityManager.unwrap(Session.class);
		
		// Delete object with id
		Query theQuery = currentSession.createQuery("delete from CartOrder where id=:itemId");
		theQuery.setParameter("itemId",itemId);
		theQuery.executeUpdate();
		
	}
	
}
