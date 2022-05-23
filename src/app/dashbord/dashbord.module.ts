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
import { FontasModule } from '../fontawsome/fontawsome.module';
import { NgxStarRatingModule } from 'ngx-star-rating';
// import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    FontasModule,
    NgxStarRatingModule,
    NgbModule,

    
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
