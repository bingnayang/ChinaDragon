package com.restaurant.chinadragonbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.restaurant.chinadragonbackend.dao.MenuDAO;

@Service
public class MenuServiceImplement implements MenuService {
	private MenuDAO menuDAO;
	
	@Autowired
	public MenuServiceImplement(MenuDAO theMenu) {
		menuDAO = theMenu;
	}
	
	
}
