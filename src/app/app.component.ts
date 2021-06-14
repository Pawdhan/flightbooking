import { Component } from '@angular/core';
import { User } from './entity/User';
import { Globals } from './Globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  active = 1;
  constructor(public globals: Globals) {
    this.globals.role = "";
    this.globals.validated = false;
  }
  onSelect(value: string) {
    this.globals.role = value;
  }

  logOut() {
    this.globals.validated = false;
    this.globals.role = "";
    this.globals.user = new User();
  }
}
