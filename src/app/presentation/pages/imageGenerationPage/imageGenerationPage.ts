import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-image-generation-page',
  imports: [
    CommonModule
  ],
  templateUrl: './imageGenerationPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageGenerationPage { }
