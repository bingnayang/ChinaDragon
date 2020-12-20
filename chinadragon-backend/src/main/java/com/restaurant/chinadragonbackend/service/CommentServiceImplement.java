package com.restaurant.chinadragonbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.restaurant.chinadragonbackend.dao.CommentDAO;
import com.restaurant.chinadragonbackend.entity.Comment;

@Service
public class CommentServiceImplement implements CommentService {
	private CommentDAO commentDAO;
	
	@Autowired
	public CommentServiceImplement(CommentDAO theCommentDAO) {
		commentDAO = theCommentDAO;
	}

	@Override
	@Transactional
	public void save(Comment theComment) {
		commentDAO.save(theComment);
	}
}
