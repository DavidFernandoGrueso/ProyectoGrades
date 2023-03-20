import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderhomeComponent } from './headerhome/headerhome.component';
import { SliderComponent } from './slider/slider.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ListhComponent } from './listh/listh.component';
import { FooterhoComponent } from './footerho/footerho.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderhomeComponent,
    SliderComponent,
    LoginComponent,
    MainComponent,
    ListhComponent,
    FooterhoComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
