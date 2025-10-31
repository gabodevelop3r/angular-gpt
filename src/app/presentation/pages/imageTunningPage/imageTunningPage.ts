import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-tunning-page',
  imports: [
    CommonModule,
  ],
  templateUrl: './imageTunningPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageTunningPage { }
