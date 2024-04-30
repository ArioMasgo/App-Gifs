import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'share-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css'],
})
export class LazyImageComponent implements OnInit {
  @Input()
  public url!: string;

  @Input()
  public alt: string = ' ';
  public hasLoarder: boolean = false;

  ngOnInit(): void {
    if (!this.url) throw new Error('Url error');
  }

  onLoard() {
    console.log('image cargo');

    this.hasLoarder = true;
  }
}
