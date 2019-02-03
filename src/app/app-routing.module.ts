import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { OrderscreenComponent } from './orderscreen/orderscreen.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AdminComponent} from './admin/admin.component';
import {
  AuthGuardService as AuthGuard
} from './auth-guard.service';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {APP_BASE_HREF} from '@angular/common';

const APP_ROUTING : Routes = [
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  // {path: 'home', component: OrderscreenComponent},
  {path: '', component: OrderscreenComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(APP_ROUTING),
    RouterModule.forChild(APP_ROUTING),
    FormsModule,
    CommonModule]
  ,
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
})
export class AppRoutingModule { }
