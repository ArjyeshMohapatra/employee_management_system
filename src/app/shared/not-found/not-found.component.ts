import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  isLoggedIn = false;

  constructor(
    private router: Router,
    private session: SessionService
  ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('authToken');
    this.isLoggedIn = !!token && !this.session.isExpired(token);
  }

  goBack(): void {
    this.router.navigate([this.isLoggedIn ? '/dashboard' : '/login']);
  }
}