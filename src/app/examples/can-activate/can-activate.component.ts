import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-can-activate',
  templateUrl: './can-activate.component.html',
  styleUrls: ['./can-activate.component.css'],
})
export class CanActivateComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
}
