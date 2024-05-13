import { Injectable } from '@angular/core';
import {delay, of} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor() {}

  isAuthenticated() {
    return of(true);//.pipe(delay(2000));
  }

  getRole(): 'Admin' | 'Support' | 'Customer' | 'None' {
    return 'None';
  }
}
