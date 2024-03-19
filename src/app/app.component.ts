
import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  showAboutDropdown: boolean = false;
  aboutDropdownItems: any[] = [
    { title: 'About', link: '#content' },
    { title: 'Constitution', link: '../assets/DOC-20221229-WA0013..pdf' }
    // Add more items if needed
  ];
  showDropdown = false;

   toggleDropdown() {
    this.showDropdown = !this.showDropdown;
    this.showAboutDropdown = !this.showAboutDropdown;
  }

  toggleAboutDropdown(event: Event) {
    event.stopPropagation(); // Prevents the click event from propagating further
    this.showAboutDropdown = !this.showAboutDropdown;
  }
  
  
  public appPages = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'About', url: 'about', icon: 'person' },
    { title: 'Alumni', url: 'alumni', icon: 'school' },
    { title: 'Membership', url: 'membership', icon: 'cash' },
    { title: 'Reunion', url: 'company', icon: 'ribbon' },
    { title: 'Donate', url: 'donate', icon: 'wallet' },
    { title: 'Team', url: 'team', icon: 'people' },
    { title: 'Contact Us', url: 'contact', icon: 'call' },
   
  ];
 

  public contactDetails = {
    socialMedia: [
      {URL: 'twitter.com', icon:''},
      {URL: 'instragam.com', icon:''},
      {URL: 'facebook.com', icon:''},
      {URL: 'linked.in', icon:''},
    ],
  };
  constructor(private Router: Router){}

  shouldShowNavbar():boolean{
    return !['/sign-in','/sign-in/sign-up'].includes(this.Router.url);
  }
}
