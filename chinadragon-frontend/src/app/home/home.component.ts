import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: string;
  address: string[];

  constructor() { }

  ngOnInit(): void {
    this.name = "China Dragon";
    this.address = ["2029 Coliseum Blvd.,","Montgomery, AL 36110"];
  }

}
