import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  loading = false;
  show() {
    this.loading = true;
  }

  hide(startTime: number, minMs = 1000): void {
    const elapsed = Date.now() - startTime;
    const remaining = Math.max(minMs - elapsed, 0);
  
    setTimeout(() => {
      this.loading = false;
    }, remaining);
  }
}
