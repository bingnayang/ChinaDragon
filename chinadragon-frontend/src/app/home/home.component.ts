import { Component, OnInit } from '@angular/core';
import { Hour } from '../hour';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '../comment';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  name: string;
  address: string[];
  phones: string[];
  hours: Hour[];
  theComment: Comment = new Comment();

  constructor(private router: Router, private route: ActivatedRoute, private commentService: CommentService) { }

  ngOnInit(): void {
    this.name = "China Dragon";
    this.address = ["2029 Coliseum Blvd.,","Montgomery, AL 36110"];
    this.phones = ["334 - 213 - 0989","334 - 213 - 0991"]
    this.hours =[
      {day:"Monday",hour:"10:30 AM - 9:30 PM"},
      {day:"Tuesday",hour:"10:30 AM - 9:30 PM"},
      {day:"Wednesday",hour:"10:30 AM - 9:30 PM"},
      {day:"Thursday",hour:"10:30 AM - 9:30 PM"},
      {day:"Friday",hour:"10:30 AM - 10:00 PM"},
      {day:"Saturday",hour:"10:30 AM - 10:00 PM"},
      {day:"Sunday",hour:"Closed"},
    ]
  }

  fullMenu(){
    this.router.navigate(['menu']);
  }

  onSubmit(){
    this.saveComment();
  }

  saveComment(){
    this.commentService.createComment(this.theComment).subscribe(data => {
      console.log(data);
      this.router.navigate(['home']);
      this.theComment = new Comment();
    })
    console.log(this.theComment);
  }

}