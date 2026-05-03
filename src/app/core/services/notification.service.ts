import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  visible = false;
  title = '';
  message = '';
  type = '';
  private timer?: ReturnType<typeof setTimeout>;
  constructor() { }

  show(title: string, message: string, type = 'error') {
    if (this.timer) clearTimeout(this.timer);

    this.title = title;
    this.message = message;
    this.type = type;
    this.visible = true;

    this.timer = setTimeout(() => {
      this.close();
    }, 4500);
  }

  close() {
    this.visible = false;
    if (this.timer) clearTimeout(this.timer);
    this.timer = undefined;
  }

  showError(error: any) {
    const info = this.translate(error);
    this.show(info.title, info.message, 'error');
  }

  showSuccess(title: string, message: string) {
    this.show(title, message, 'success');
  }

  showWarning(title: string, message: string) {
    this.show(title, message, 'warning');
  }

  showMessage(title: string, message: string) {
    this.show(title, message, 'info');
  }

  private translate(error: any) {
    const backendMessage = error?.error?.message;
    const browserMessage = error?.message || '';
    const status = error?.status;

    if (backendMessage) {
      return {
        title: 'Request failed',
        message: backendMessage
      };
    }

    if (browserMessage.includes('ERR_NAME_NOT_RESOLVED')) {
      return {
        title: 'Server unreachable',
        message: 'Backend server address could not be found. Backend may be offline.'
      };
    }

    if (browserMessage.includes('ERR_CONNECTION_REFUSED')) {
      return {
        title: 'Connection refused',
        message: 'Backend server is not accepting connections.'
      };
    }

    if (browserMessage.includes('Http failure response')) {
      return {
        title: 'Request failed',
        message: browserMessage
      };
    }

    if (status == 0) {
      return {
        title: 'Network Error',
        message: 'Could not connect to backend server.'
      }
    }

    return {
      title: 'Unexpected error',
      message: 'Something went wrong while processing your request.'
    };
  }
}
