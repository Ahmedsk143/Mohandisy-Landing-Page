import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  constructor() {
    this.contactForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      serviceType: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {}
  submit() {
    console.log(this.contactForm.value);
  }
}
