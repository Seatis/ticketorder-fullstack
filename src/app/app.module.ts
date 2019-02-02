import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { OrderscreenComponent } from './orderscreen/orderscreen.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {DataService} from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    OrderscreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastModule
  ],
  providers: [MessageService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
