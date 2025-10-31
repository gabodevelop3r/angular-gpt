import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assistant-page',
  imports: [
    CommonModule,
  ],
  templateUrl: './assistantPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssistantPage { }
