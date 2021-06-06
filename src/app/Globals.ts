import { Injectable } from '@angular/core';
import { User } from './entity/User';

@Injectable()
export class Globals {
  role: string = '';
  validated: boolean = false;
  user: User = new User();
}