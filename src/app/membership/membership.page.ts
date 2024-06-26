import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.page.html',
  styleUrls: ['./membership.page.scss'],
})
export class MembershipPage implements OnInit {
  formData: any = {}; // Initialize an empty object to store form data


  submitForm() {
    // Perform validation
    if (!this.formData.Name || !this.formData['College ID'] || !this.formData.Branch || !this.formData.Degree || 
        !this.formData['Select Batch'] || !this.formData.Gender || !this.formData.Employer || !this.formData.Email || 
        !this.formData.Address || !this.formData.LinkedIn || !this.formData.Designation || !this.formData['Mobile No'] || 
        !this.formData['Whatsapp No.'] || !this.formData.Marksheet) {
      // Display an error message or handle validation failure
      console.log('Please fill out all required fields.');
      return;
    }

    // Additional custom validation checks can be added

    // If all validations pass, proceed with form submission
    console.log('Form submitted successfully!');
    // You may want to send the form data to your server or perform other actions here
  }

  validateFileType(event: any) {
    const file = event.target.files[0];
    if (file.type!== 'application/pdf') {
      alert('Please upload a PDF file.');
      this.formData.Marksheet = null;
    }
  }

  constructor() {}

  ngOnInit() {
  }

  

}