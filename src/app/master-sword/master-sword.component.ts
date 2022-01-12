import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-sword',
  templateUrl: './master-sword.component.html',
  styleUrls: ['./master-sword.component.css']
})
export class MasterSwordComponent implements OnInit {

  // create `proclamation` variable for View template (`component.html`)
  proclamation: string = "It's Dangerous to go Alone! Take This!";
  
  constructor() { }

  ngOnInit(): void {
  }

}
