import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.page.html',
  styleUrls: ['./membership.page.scss'],
})
export class MembershipPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSubmit(event: Event) {
    event.preventDefault();
    // Add your form submission logic here
  }
  

}