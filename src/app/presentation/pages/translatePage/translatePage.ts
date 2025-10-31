import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-translate-page',
  imports: [
    CommonModule
  ],
  templateUrl: './translatePage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TranslatePage { }
