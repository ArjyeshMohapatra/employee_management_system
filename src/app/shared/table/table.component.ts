import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  
  @Input() dataSource: any;
  @Input() displayedColumns: string[] = [];
  @Input() totalRecords: number = 0;
  @Input() pageSize: number = 5;
  @Input() pageSizeOptions: number[] = [5, 10, 15];

  @Output() pageChange = new EventEmitter<any>();

}