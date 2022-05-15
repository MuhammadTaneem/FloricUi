import { DashbordResolver } from './dashbord.resolver';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordRoutingModule } from './dashbord-routing.module';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CoreuiModule } from '../coreui/coreui.module';
import { DashbordService } from './dashbord.service';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  declarations: [
    CategoryComponent,
    ProductsComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    DashbordRoutingModule,
    CoreuiModule,
    NgImageSliderModule,
    
  ],
  exports : [
    CommonModule,
    DashbordRoutingModule,
  ],
  providers:[
    // DashbordService,
    DashbordService,
    DashbordResolver,
  ]
})
export class DashbordModule { }
