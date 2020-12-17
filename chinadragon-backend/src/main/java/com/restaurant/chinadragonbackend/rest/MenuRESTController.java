package com.restaurant.chinadragonbackend.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.restaurant.chinadragonbackend.entity.Menu;
import com.restaurant.chinadragonbackend.service.MenuService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class MenuRESTController {
	private MenuService menuService;
	
	// Inject menu DAO (use constructor injection)
	@Autowired
	public MenuRESTController(MenuService theMenuService) {
		menuService = theMenuService;
	}
	
	// GET "/menus" - return list of menu
	@GetMapping("/menus")
	public List<Menu> findAllMenuItem(){
		return menuService.findAll();
	}
	
}
