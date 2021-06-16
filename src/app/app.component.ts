import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './entity/User';
import { Globals } from './Globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  active = 1;
  constructor(public globals: Globals, private router: Router) {
    this.globals.role = localStorage.getItem('role')!;
    this.globals.validated = JSON.parse(localStorage.getItem('valid')!);
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')!));
    this.currentUser = this.currentUserSubject.asObservable();
    this.currentUser.subscribe(res => {
      this.globals.user = res as User;
    });
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
    localStorage.removeItem('currentUser');
    localStorage.removeItem('role');
    localStorage.removeItem('valid');
    this.router.navigate(['/']);
  }
}
