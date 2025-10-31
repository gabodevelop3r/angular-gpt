import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pros-cons-stream-page',
  imports: [
    CommonModule
  ],
  templateUrl: './prosConsStreamPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProsConsStreamPage { }
