import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interface/gifs.interface';

@Injectable({ providedIn: 'root' })
export class GifsService {
  private api_Key: string = 'wSDkQjszjp4m7c2iObcH4ZOUzAQHXp4l';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';
  private _tagHistory: string[] = [];
  public gifList: Gif[] = [];

  constructor(private http: HttpClient) {
    this.loardLocalStorage();
  }

  get tagHistory(): string[] {
    return [...this._tagHistory];
  }

  organiceHistory(tag: string): void {
    tag = tag.toLowerCase();
    if (this._tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter((t) => t !== tag);
    }
    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.splice(0, 12);
    this.saveLocalStorage();
  }

  saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this.tagHistory));
  }
  loardLocalStorage(): void {
    if (!localStorage.getItem('history')) return;
    this._tagHistory = JSON.parse(localStorage.getItem('history')!);
    if (this._tagHistory.length == 0) return;
    const fistTag = this._tagHistory[0];
    this.searhTag(fistTag);
  }

  searhTag(tag: string): void {
    if (tag.length === 0) return;
    this.organiceHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.api_Key)
      .set('q', tag)
      .set('limit', '12');

    this.http
      .get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe((resp) => {
        this.gifList = resp.data;
        //console.log(this.gifList);
      });
  }
}
