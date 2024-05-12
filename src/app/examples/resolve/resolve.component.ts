import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { map, tap } from 'rxjs';
import { User } from '../../services/user.service';

@Component({
  selector: 'app-resolve',
  templateUrl: './resolve.component.html',
  styleUrls: ['./resolve.component.css'],
})
export class ResolveComponent implements OnInit {
  readonly users$ = this.route.data.pipe(
    map((data: { users: User[] } | any) => data.users)
  );

  constructor(private route: ActivatedRoute) {
    route.data.pipe(tap((d) => console.log(d))).subscribe();
  }

  ngOnInit() {}
}
