import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'errorMsg',
  pure: true,
  standalone: true
})
export class ErrorMsgPipe implements PipeTransform {
  transform(errors: ValidationErrors | null | undefined, label: string): string {
    if (!errors) return '';

    if (errors['required']) return `${label} is required`;
    if (errors['pattern']) return `Invalid format for ${label}.`;
    
    if (errors['invalidPhoneNumber']) return 'Please enter a valid phone number.';
    if (errors['invalidAadharNumber']) return 'Aadhar must be 12 digits.';
    if (errors['scriptDetected']) return 'Special characters/scripts are not allowed.';
    if (errors['invalidSalary']) return 'Enter a valid salary amount.';
    if (errors['invalidEmail']) return 'Please enter a valid email id.';
    if (errors['invalidPassword']) return 'Please enter a valid password.';
    
    return 'Invalid input';
  }
}