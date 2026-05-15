import { Component, OnInit } from '@angular/core';
import { SidebarStateService } from './sidebar-state.service';
import { LeaveService } from 'src/app/core/services/leave.service';
import { interval, startWith } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    public sidebarState: SidebarStateService,
    public leaveService: LeaveService
  ) { }

  ngOnInit(): void {
    interval(10000).pipe(startWith(0)).subscribe(() => {
      this.leaveService.refreshState();
    })
  }

  toggleSidebar(): void {
    this.sidebarState.toggleDesktopSidebar();
  }

  closeMobileSidebar(): void {
    this.sidebarState.closeMobileSidebar();
  }

  get hrPortalBlocked(): boolean {
    return localStorage.getItem('hrPortalBlocked') === 'true';
  }
}