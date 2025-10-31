import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pros-cons-page',
  imports: [
    CommonModule
  ],
  templateUrl: './prosConsPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProsConsPage { }
