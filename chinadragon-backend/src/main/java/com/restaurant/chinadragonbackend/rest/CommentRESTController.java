package com.restaurant.chinadragonbackend.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.restaurant.chinadragonbackend.entity.Comment;
import com.restaurant.chinadragonbackend.service.CommentService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class CommentRESTController {
	private CommentService commentService;
	
	@Autowired
	public CommentRESTController(CommentService theCommentService) {
		commentService = theCommentService;
	}
	
	// POST "/comments - add new comment 
	@PostMapping("/comments")
	public Comment saveComment(@RequestBody Comment theComment) {
		theComment.setId(0);
		commentService.save(theComment);
		return theComment;
	}
	
}
