import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-not-allowed',
  templateUrl: './not-allowed.component.html',
  styleUrls: ['./not-allowed.component.css'],
})
export class NotAllowedComponent implements OnInit {
  type!: string;

  constructor(route: ActivatedRoute) {
    this.type = route.snapshot.queryParams['type'];
  }

  ngOnInit() {}
}
