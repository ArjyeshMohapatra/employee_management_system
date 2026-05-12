import { Component, OnInit } from '@angular/core';
import { LoadChildren } from '@angular/router';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor(public loader: LoadingService) { }

  ngOnInit(): void {
  }

}
