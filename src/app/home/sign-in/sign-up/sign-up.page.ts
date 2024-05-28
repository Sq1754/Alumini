import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { OtpComponent } from './otp/otp.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({  
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  form!: FormGroup;
  type: boolean = true;
  verified = false;
  verifiedNumber: any;

  constructor(
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      phone: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(10), Validators.maxLength(10)]
      }),
      name: new FormControl(null, {
        validators: [Validators.required]
      }),
      email: new FormControl(null, {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(8)]
      })
    });
  }

  changeType() {
    this.type = !this.type;
  }

  async signUp() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }

    try {
      const userData = this.form.value;
      await this.http.post<any>('http://localhost:3000/sign-up', userData).toPromise();
      console.log('User signed up successfully:', userData);
      // Redirect to another page or show success message
      this.router.navigate(['../home']);
    } catch (error) {
      console.error('Error signing up:', error);
      // Handle error, such as displaying an error message to the user
    }
  }
  
  

  async verifyViaOtp() {
    console.log('otp', this.form.value.phone);
    const phoneNumber = this.form.value.phone;
    if (phoneNumber && phoneNumber?.length == 10) {
      const options: any = {
        component: OtpComponent
      };
      const modal = await this.modalCtrl.create(options);
      await modal.present();
      const { data } = await modal.onWillDismiss();
      if (data) {
        console.log('otp: ', data);
        this.verified = true;
        this.verifiedNumber = phoneNumber;
      }
    } else {
      const toast = await this.toastCtrl.create({
        message: 'Please enter proper phone number',
        duration: 5000,
        color: 'danger'
      });
      toast.present();
    }

  }

  changeNumber(event: any) {
    const phoneNumber = this.form.value.phone;
    if (phoneNumber && phoneNumber?.length == 10) {
      if (this.verifiedNumber && phoneNumber == this.verifiedNumber) {
        this.verified = true;
      } else {
        this.verified = false;
      }
    }
  }

}
