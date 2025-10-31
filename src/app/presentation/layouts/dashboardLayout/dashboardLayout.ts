import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-layout',
  imports: [
    CommonModule,
  ],
  templateUrl: './dashboardLayout.html',

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardLayout { }
