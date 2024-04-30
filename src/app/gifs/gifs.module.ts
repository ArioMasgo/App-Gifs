import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { HomePageComponent } from './pages/homepage/home-page.component';
import { SeachBoxComponent } from './components/seach-box/seach-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component';

@NgModule({
  declarations: [
    HomePageComponent,
    SeachBoxComponent,
    CardListComponent,
    GifsCardComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [HomePageComponent],
})
export class GifsModule {}
