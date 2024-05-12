import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

export type User = {
  id: number;
  name: string;
};

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor() {}

  getUsers(timeout: number = 1000) {
    return of([
      { id: 1, name: 'First User' },
      { id: 2, name: 'Second User' },
    ]).pipe(delay(timeout));
  }
}
