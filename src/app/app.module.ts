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
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';

import {DataService} from './data.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import {AuthGuardService} from './auth-guard.service';
import {AuthService} from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    OrderscreenComponent,
    DashboardComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    TableModule,
    ButtonModule
  ],
  providers: [MessageService, DataService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
