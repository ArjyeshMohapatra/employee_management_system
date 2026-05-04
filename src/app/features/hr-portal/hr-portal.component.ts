import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NotificationService } from 'src/app/core/services/notification.service';
import { LeaveService } from 'src/app/core/services/leave.service';
 
interface LeaveRequest {
  id: string;
  emp_id: string;
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
    'emp_id',
    'from_date',
    'to_date',
    'reason',
    'status',
    'action'
  ];
 
  dataSource = new MatTableDataSource<LeaveRequest>([]);
 
  constructor(
    private leaveService: LeaveService,
    private notify: NotificationService
  ) {}
 
  ngOnInit(): void {
    this.loadAllLeaves();

    this.dataSource.filterPredicate = (row: LeaveRequest, filter: string) => {
      return (
        row.emp_id.toLowerCase().includes(filter) ||
        row.from_date.toLowerCase().includes(filter) ||
        row.to_date.toLowerCase().includes(filter) ||
        row.reason.toLowerCase().includes(filter) ||
        row.status.toLowerCase().includes(filter)
      );
    };
  }
 
  loadAllLeaves() {
    Promise.all([
      this.leaveService.getLeavesByStatus('PENDING').toPromise(),
      this.leaveService.getLeavesByStatus('APPROVED').toPromise(),
      this.leaveService.getLeavesByStatus('REJECTED').toPromise()
    ])
    .then((responses: any[]) => {
      const allData = [
        ...(responses[0]?.data || []),
        ...(responses[1]?.data || []),
        ...(responses[2]?.data || [])
      ];
 
      this.dataSource.data = allData.map((item: any, index: number) => ({
        ...item,
        slNo: index + 1
      }));
    })
    .catch(err => this.notify.showError(err));
  }
 
  approveLeave(leaveId: string) {
    this.leaveService.updateLeaveStatus(leaveId, 'APPROVED')
      .subscribe({
        next: () => {
          this.notify.showSuccess('Leave approved', 'The leave request was approved.');
          this.loadAllLeaves();
        },
        error: (err) => this.notify.showError(err)
      });
  }
 
  rejectLeave(leaveId: string) {
    this.leaveService.updateLeaveStatus(leaveId, 'REJECTED')
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
  }
}
