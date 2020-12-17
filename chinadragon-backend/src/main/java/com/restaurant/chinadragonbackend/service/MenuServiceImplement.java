package com.restaurant.chinadragonbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.restaurant.chinadragonbackend.dao.MenuDAO;
import com.restaurant.chinadragonbackend.entity.Menu;

@Service
public class MenuServiceImplement implements MenuService {
	private MenuDAO menuDAO;
	
	@Autowired
	public MenuServiceImplement(MenuDAO theMenu) {
		menuDAO = theMenu;
	}

	@Override
	public List<Menu> findAll() {
		return menuDAO.findAll();
	}
	
	
}
