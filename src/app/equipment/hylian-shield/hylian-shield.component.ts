import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-hylian-shield',
  templateUrl: './hylian-shield.component.html',
  styleUrls: ['./hylian-shield.component.css']
})
export class HylianShieldComponent implements OnInit {

  proclamation: string;
  username: string;

  constructor(private userService: UserService) {
    this.username = this.userService.getUserName();
    this.proclamation = `${this.username} has received the Hylian Shield!`
  }

  ngOnInit(): void {
  }

}
