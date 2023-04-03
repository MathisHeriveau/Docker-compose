import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RapportComponent } from './rapport/rapport.component';
import { HeaderComponent } from './header/header.component';
import { ListRapportComponent } from './list-rapport/list-rapport.component';
import { HomeComponent } from './home/home.component';
import { NewRapportComponent } from './new-rapport/new-rapport.component';

@NgModule({
  declarations: [
    AppComponent,
    RapportComponent,
    HeaderComponent,
    ListRapportComponent,
    HomeComponent,
    NewRapportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
