import { Component } from '@angular/core';
import { BaseComponent } from '../../../projects/my-lib/src/lib/base-composant';
import { LoggerService } from '../../../projects/my-lib/src/lib/logger.service';

@Component({
  selector: 'app-dashboard',
 
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent extends BaseComponent {
  inputValue: string = ' ';

  constructor(logger: LoggerService) {
    super(logger); // Appel du constructeur de BaseComponent
  }
}

