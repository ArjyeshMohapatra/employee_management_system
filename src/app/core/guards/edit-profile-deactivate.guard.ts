import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { EditProfileComponent } from 'src/app/features/edit-profile/edit-profile.component';

@Injectable({
  providedIn: 'root'
})
export class EditProfileDeactivateGuard implements CanDeactivate<EditProfileComponent> {
  canDeactivate(component: EditProfileComponent): boolean{
    if (component.canLeave) return true;
    return confirm('You have unsaved changes. Discard them ?');
  }
  
}
