import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-seach-box',
  templateUrl: './seach-box.component.html',
  styleUrls: ['./seach-box.component.css'],
})
export class SeachBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  searhTag(): void {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searhTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
