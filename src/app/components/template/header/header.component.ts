import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  storage = localStorage;
  
  ngOnInit(): void {

  }

  getUser() {
    if (this.storage.getItem('data')) {
      return JSON.parse(this.storage.getItem('data')).nome;
    }
  }

}
