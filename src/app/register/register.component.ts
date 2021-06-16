import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../entity/User';
import { FlightBookingService } from '../flight-booking-service';
import { Globals } from '../Globals';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  user: User = new User();
  constructor(private formBuilder: FormBuilder, private router: Router, 
    public global: Globals, private flightService: FlightBookingService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required]]
  });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.user.email = this.f.email.value;
    this.user.name = this.f.name.value;
    this.user.password = this.f.password.value;
    this.flightService.registerUser(this.user).subscribe(res => {
      alert("Registered successfully!");
      this.submitted = true;
      this.router.navigate(['/login']);
    }, error => {
      alert('Error while registering');
    })

    }
}
