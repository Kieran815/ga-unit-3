import { Component, OnInit } from '@angular/core';
// Service Import
import { UserService } from 'src/app/services/user/user.service';
@Component({
  selector: 'app-master-sword',
  templateUrl: './master-sword.component.html',
  styleUrls: ['./master-sword.component.css']
})

export class MasterSwordComponent implements OnInit {

  proclamation: string; // create `proclamation` variable for View template (`component.html`)
  username: string; // create `username` to save result from `UserService`
  
  // pass services through constructor params as arguments
    // tells class to use that service
    // service becomes Property of the class, can use `this.userService`
  constructor(private userService: UserService) {
    this.username = this.userService.getUserName(); // call method from service and assign to `username` variable
    this.proclamation = `It's Dangerous to go Alone, ${this.username}! Take This!`; // use variable in component
  }

  ngOnInit(): void {
  }

}
