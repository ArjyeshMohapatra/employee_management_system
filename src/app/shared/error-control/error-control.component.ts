import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-error-control',
  templateUrl: './error-control.component.html',
  styleUrls: ['./error-control.component.css']
})
export class ErrorControlComponent {
  @Input() control!: AbstractControl | null;
  @Input() labelName: string = 'Field';
}
