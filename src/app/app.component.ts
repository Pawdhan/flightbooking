import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './entity/User';
import { Globals } from './Globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  active = 1;
  constructor(public globals: Globals, private router: Router) {
    this.globals.role = "";
    this.globals.validated = false;
  }
  onSelect(value: string) {
    this.globals.role = value;
    this.router.navigate(['/login']);
  }

  navigate(page: string) {
    this.router.navigate([page]);
  }

  logOut() {
    this.globals.validated = false;
    this.globals.role = "";
    this.globals.user = new User();
  }
}
