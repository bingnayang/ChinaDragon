package com.restaurant.chinadragonbackend.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="menu")
public class Menu {
	// Define Fields
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@Column(name="name")
	private String name;
	
	@Column(name="section")
	private String section;
	
	@Column(name="image")
	private String image;
	
	@OneToMany(fetch=FetchType.LAZY, cascade=CascadeType.ALL)
	@JoinColumn(name="menu_id")
	private List<SizePrice> sizePrice;
	
	public Menu() {}

	public Menu(String name, String section, String image) {
		this.name = name;
		this.section = section;
		this.image = image;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSection() {
		return section;
	}

	public void setSection(String section) {
		this.section = section;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public List<SizePrice> getSizePrice() {
		return sizePrice;
	}

	public void setSizePrice(List<SizePrice> sizePrice) {
		this.sizePrice = sizePrice;
	}
	// Add a convenience method
	public void addSizePrice(SizePrice theSizePrices) {
		if(sizePrice == null) {
			sizePrice = new ArrayList<>();
		}
		sizePrice.add(theSizePrices);
	}
	
}
