import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { InfoService } from './info.service';
import { HomeComponent } from './home/home.component';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule

  ],
  providers: [

  InfoService, HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
