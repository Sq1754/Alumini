import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BannerComponent } from './banner/banner.component';
import { SignInPage } from '../sign-in/sign-in.page';
import { Router } from '@angular/router';


// import { CUSTOM_ELEMENTS_SCHEMA,  ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, BannerComponent],
 // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage implements OnInit {

  public appPages = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'About', url: 'about', icon: 'person' },
    { title: 'Alumni', url: 'alumni', icon: 'school' },
    { title: 'Membership', url: 'membership', icon: 'cash' },
    { title: 'Reunion', url: 'company', icon: 'ribbon' },
    { title: 'Donate', url: 'donate', icon: 'wallet' },
    { title: 'Team', url: '/team', icon: 'people' },
    { title: 'Contact Us', url: 'contact', icon: 'call' },
  
  ];
  counterValue1: number = 0;
  counterValue2: number = 50; // Set initial value for counter 2
  counterValue3: number = 100; // Set initial value for counter 3

  counterInterval1: any;
  counterInterval2: any;
  counterInterval3: any;

  slides: any[] = [];
  
  constructor() {}

  items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);

  doRefresh(event: any) {
    setTimeout(() => {
      // Your refresh logic goes here
      this.items = Array.from({ length: 20 }, (_, i) => `New Item ${i + 1}`);

      event.target.complete();
    }, 1000);}

  ngOnInit(): void {
    this.startCounter1();
    this.startCounter2();
    this.startCounter3();
    this.slides = [
      {banner: 'assets/AAECA Banner.png'},
      {banner: 'assets/IMG-20240123-WA0003.jpg'},
      // {banner: 'assets/b2.jpeg'},
      // {banner: 'assets/b3.jpeg'},
    ];
    
  }

  startCounter1() {
    this.counterInterval1 = setInterval(() => {
      this.counterValue1++;
      if (this.counterValue1 >= 500) {
        clearInterval(this.counterInterval1);
      }
    }, 10);
  }

  startCounter2() {
    this.counterInterval2 = setInterval(() => {
      this.counterValue2++;
      if (this.counterValue2 >= 2000) { // Adjust the stopping point for counter 2
        clearInterval(this.counterInterval2);
      }
    }, 0);
  }

  startCounter3() {
    this.counterInterval3 = setInterval(() => {
      this.counterValue3++;
      if (this.counterValue3 >= 200) { // Adjust the stopping point for counter 3
        clearInterval(this.counterInterval3);
      }
    }, 50);
  }

}
