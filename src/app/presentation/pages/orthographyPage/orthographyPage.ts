import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orthography-page',
  imports: [
    CommonModule
  ],
  templateUrl: './orthographyPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrthographyPage { }
