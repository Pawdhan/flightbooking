import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin, User } from '../entity/User';
import { FlightBookingService } from '../flight-booking-service';
import { Globals } from '../Globals';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;
  admin: Admin = new Admin();
  constructor(private formBuilder: FormBuilder, private flightService: FlightBookingService,
    private router: Router, public global: Globals) { 

  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });

  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    // this.submitted = true;
    // this.global.validated = true;
    // this.navigate();

    if(this.global.role == "ADMIN") {
      this.admin.email = this.f.email.value;
      this.admin.password = this.f.password.value;
      this.flightService.adminLogin(this.admin).subscribe(res => {
        alert('Login Successfull!');
        this.submitted = true;
        this.global.validated = true;
        this.navigate();        
      }, error => {
        alert(error.error.message);
      });
    } else {
      this.flightService.loginUser(this.f.email.value, this.f.password.value).subscribe(res => {
        alert("Login successfull!");
        this.global.user = res as User;
        this.submitted = true;
        this.global.validated = true;
        this.navigate();           
      }, error => {
        alert(error.error.message);
      });
    }
  } 

  navigate() {
    this.global.role == "ADMIN" ? this.router.navigate(['/manageschedules']) : this.router.navigate(['/bookflight']);
  }
}
