import { Component } from '@angular/core';
import { Gif } from 'src/app/gifs/interface/gifs.interface';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private gifsService: GifsService) {}

  get tags(): string[] {
    return this.gifsService.tagHistory;
  }

  searchTag(tag: string): void {
    this.gifsService.searhTag(tag);
  }
}
