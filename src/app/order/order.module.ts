import { CoreuiModule } from './../coreui/coreui.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { CartComponent } from './cart/cart.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    CoreuiModule,
    FontAwesomeModule,
  ]
})
export class OrderModule { }
