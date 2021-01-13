import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule}from '@angular/common/http';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ApiService } from './api.service';
import {
  LazyLoadImageModule,
  scrollPreset
} from "ng-lazyload-image";
@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent
  ],
  imports: [
 
  BrowserModule,
    HttpClientModule,
    LazyLoadImageModule.forRoot({
      preset:   scrollPreset
    })
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
