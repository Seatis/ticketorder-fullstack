import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { OrderscreenComponent } from './orderscreen/orderscreen.component';

const APP_ROUTING : Routes = [
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  // {path: 'home', component: OrderscreenComponent},
  {path: '', component: OrderscreenComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(APP_ROUTING)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
