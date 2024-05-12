import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor() {}

  isAuthenticated() {
    return of(true);
  }

  getRole(): 'Admin' | 'Support' | 'Customer' | 'None' {
    return 'Admin';
  }
}
