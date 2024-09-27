import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CarItemComponent } from './components/car-item/car-item.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CarComponent } from './pages/car/car.component';
import { GeneralComponent } from './pages/car/general/general.component';
import { DetailsComponent } from './pages/car/details/details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'car/:index',
    component: CarComponent,
  },
];

@NgModule({
  declarations: [AppComponent, CarItemComponent, HomeComponent, CarComponent, GeneralComponent, DetailsComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
