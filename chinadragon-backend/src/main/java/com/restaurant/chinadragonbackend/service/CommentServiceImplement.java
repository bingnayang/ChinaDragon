package com.restaurant.chinadragonbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.restaurant.chinadragonbackend.dao.CommentDAO;

@Service
public class CommentServiceImplement implements CommentService {
	private CommentDAO commentDAO;
	
	@Autowired
	public CommentServiceImplement(CommentDAO theCommentDAO) {
		commentDAO = theCommentDAO;
	}
}
