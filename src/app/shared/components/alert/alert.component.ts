import { Component, Input } from '@angular/core';

@Component({ selector: 'app-alert', standalone: false, template: '<p class="alerta" [class.error]="type === \'error\'" [class.success]="type === \'success\'" role="status">{{ message }}</p>', styles: ['.alerta { margin: 12px 0 0; font-size: 14px; } .error { color: #ba3030; } .success { color: #207343; }'] })
export class AlertComponent {
  @Input() message = '';
  @Input() type: 'success' | 'error' = 'success';
}
