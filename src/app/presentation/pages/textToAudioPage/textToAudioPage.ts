import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-to-audio-page',
  imports: [
    CommonModule
  ],
  templateUrl: './textToAudioPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TextToAudioPage { }
