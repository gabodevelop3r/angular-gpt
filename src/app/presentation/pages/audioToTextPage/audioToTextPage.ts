import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-audio-to-text-page',
  imports: [
    CommonModule
  ],
  templateUrl: './audioToTextPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudioToTextPage { }
