import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NotificationService } from 'src/app/core/services/notification.service';
import { LeaveService } from 'src/app/core/services/leave.service';
import { finalize } from 'rxjs';
import { LoadingService } from 'src/app/core/services/loading.service';

interface LeaveRequest {
  id: string;
  employeeName: string;
  from_date: string;
  to_date: string;
  reason: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  slNo?: number;
}
 
@Component({
  selector: 'app-hr-portal',
  templateUrl: './hr-portal.component.html',
  styleUrls: ['./hr-portal.component.css']
})
export class HRPortalComponent implements OnInit {

  totalRecords: number = 0;
  displayedColumns: string[] = [
    'slNo',
    'employeeName',
    'from_date',
    'to_date',
    'reason',
    'status',
    'action'
  ];

  allLeaves: LeaveRequest[] = [];
  selectedStatus: 'PENDING' | 'APPROVED' | 'REJECTED' = 'PENDING';
  statuses: ('PENDING' | 'APPROVED' | 'REJECTED')[] = [
    'PENDING',
    'APPROVED',
    'REJECTED'
  ];
 
  dataSource = new MatTableDataSource<LeaveRequest>([]);
 
  constructor(
    private leaveService: LeaveService,
    private notify: NotificationService,
    private loader: LoadingService
  ) {}
 
  ngOnInit(): void {
    this.loadAllLeaves();

    this.dataSource.filterPredicate = (row: LeaveRequest, filter: string) => {
      return (
        row.employeeName.toLowerCase().includes(filter) ||
        row.from_date.toLowerCase().includes(filter) ||
        row.to_date.toLowerCase().includes(filter) ||
        row.reason.toLowerCase().includes(filter) ||
        row.status.toLowerCase().includes(filter)
      );
    };
  }
 
  loadAllLeaves() {
    const startTime = Date.now();
    this.loader.show();
    this.leaveService.getLeavesByStatus(this.selectedStatus)
    .pipe(
      finalize(() => {
        this.loader.hide(startTime);
      })
    )
      .subscribe({
        next: (res: any) => {
          this.allLeaves = (res.data || []).map(
            (item: any, index: number) => ({
              ...item,
              slNo: index + 1
            })
          );
  
          this.dataSource.data = this.allLeaves;
          this.totalRecords = this.allLeaves.length;
        },
        error: (err) => this.notify.showError(err)
      });
  }
 
  approveLeave(leaveId: string) {
    const startTime = Date.now();
    this.loader.show();
    this.leaveService.updateLeaveStatus(leaveId, 'APPROVED')
    .pipe(
      finalize(() => {
        this.loader.hide(startTime);
      })
    )
      .subscribe({
        next: () => {
          this.notify.showSuccess('Leave approved', 'The leave request was approved.');
          this.loadAllLeaves();
        },
        error: (err) => this.notify.showError(err)
      });
  }
 
  rejectLeave(leaveId: string) {
    const startTime = Date.now();
    this.loader.show();
    this.leaveService.updateLeaveStatus(leaveId, 'REJECTED')
    .pipe(
      finalize(() => {
        this.loader.hide(startTime);
      })
    )
      .subscribe({
        next: () => {
          this.notify.showSuccess('Leave rejected', 'The leave request was rejected.');
          this.loadAllLeaves();
        },
        error: (err) => this.notify.showError(err)
      });
  }

  onPageChange(event: any): void {
  }

  filterLeaves(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.totalRecords = this.dataSource.filteredData.length;
  }

  filterByStatus(value: string): void {
    this.selectedStatus =
      value as 'PENDING' | 'APPROVED' | 'REJECTED';
  
    this.loadAllLeaves();
  }
}
