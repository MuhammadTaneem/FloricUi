import { AppResolver } from './app.resolver';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { DashbordService } from './dashbord/dashbord.service';
import { OrderModule } from './order/order.module';
import { DashbordModule } from './dashbord/dashbord.module';
import { CoreuiModule } from './coreui/coreui.module';
import { AuthModule } from './auth/auth.module';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {FontasModule}from './fontawsome/fontawsome.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';

// Import routing module
import { AppRoutingModule } from './app-routing.module';

// Import app component
import { AppComponent } from './app.component';

// Import containers
// import {
//   DefaultFooterComponent,
//   DefaultHeaderComponent,
//   DefaultLayoutComponent,
// } from './containers';



import { IconModule, IconSetService } from '@coreui/icons-angular';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

// const APP_CONTAINERS = [
//   DefaultFooterComponent,
//   DefaultHeaderComponent,
//   DefaultLayoutComponent,
// ];

@NgModule({
  // declarations: [AppComponent, ...APP_CONTAINERS],
  declarations: [AppComponent, NavbarComponent, HomepageComponent, FooterComponent,],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    CoreuiModule,
    DashbordModule,
    IconModule,
    PerfectScrollbarModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    FontasModule,
    OrderModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    IconSetService,
    Title,
    DashbordService,
    AuthService,
    AppService,
    AppResolver,
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
