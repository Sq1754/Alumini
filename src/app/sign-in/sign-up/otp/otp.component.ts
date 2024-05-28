import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent  implements OnInit {

  @ViewChild('otp1') input: any;
  otpString: string[] = ['','','',''];
  isLoading = false;

  constructor(public modalCtrl: ModalController,
    public loadCtrl: LoadingController,
    public toastCtrl: ToastController) { }

  ngOnInit() {}

  ionViewDidEnter(){
      console.log("IonviewdidEnter");
      setTimeout(() =>{
        this.input.setFocus();
        console.log('enter');
      },500);
  }


  otp(event: any, prev: any, next: any, index: any){
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.which ? event.which : event.keyCode);
    if(!pattern.test(inputChar)){
      event.preventDefault();
      this.otpString[index]="";
      return;
    }
    let value = event.target.value;
    if(value.length>1){
      this.otpString[index]= value;
    }
    if(value.length<1 && prev){
      prev.setFocus();
    }
    else if(next && value.length>0){
      next.setFocus();
    }
    else{
      if(next==''){
        this.verifyOtp();
      
      }else{return 0;} 
    }
    return 0;
  }


  async showLoader(msg:any){
    if(!this.isLoading){
    this.isLoading = true;}
    try {
      const res = await this.loadCtrl.create({
        message: msg,
        spinner: 'bubbles'
      });
      res.present().then(() => {
        if (!this.isLoading) {
          res.dismiss().then(() => {
            console.log("Abort Presenting");
          });
        }
      });
    } catch (e) {
      this.isLoading = false;
      console.log(e);
    }
  }

  async hideLoader(){
    if(this.isLoading){this.isLoading=false}
    try {
      await this.loadCtrl.dismiss();
      console.log('Dismissed');
    } catch (e) {
      return console.log(e);
    }
  }

  joinOtpArray(otp:any){
    if(!otp || otp=='') return 0;
    const otpNew = otp.join('');
    return otpNew;
  }

  async verifyOtp() {
    this.showLoader('Verifying...');
    let otp = this.joinOtpArray(this.otpString);
    // server access and verify otp
    if(otp == '1234') {
      this.otpString = ['', '', '', ''];
      this.hideLoader();
      this.modalCtrl.dismiss(otp);
    } else {
      const toast = await this.toastCtrl.create({
        message: 'Wrong OTP',
        duration: 5000,
        color: "danger"
      });
      toast.present();
      this.otpString = ['', '', '', ''];
      this.hideLoader();
    }
  }

}
