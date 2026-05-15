import { Component, OnInit } from '@angular/core';
import { SidebarStateService } from './sidebar-state.service';
import { LeaveService } from 'src/app/core/services/leave.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  pendingCount: number = 0;

  constructor(
    public sidebarState: SidebarStateService,
    private leaveService: LeaveService
  ) { }

  ngOnInit(): void {
    this.loadPendingCount();
  }

  loadPendingCount(): void {
    this.leaveService.getLeavesByStatus('PENDING').subscribe({
      next: (res: any) => {
        // Success! User has permission to see pending leaves.
        this.pendingCount = res?.data?.length || 0;
      },
      error: (err) => {
        // 403 means they are a normal employee, so we just stay at 0.
        this.pendingCount = 0;
        
        if (err.status === 403) {
          localStorage.setItem('hrPortalBlocked', 'true');
        }
      }
    });
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