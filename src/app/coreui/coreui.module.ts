import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule,
  OffcanvasModule,
  TooltipModule ,
  PaginationModule,
} from '@coreui/angular';


let arr = [
  CommonModule,
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule,
  OffcanvasModule,
  TooltipModule ,
  PaginationModule,
]

@NgModule({
  declarations: [],
  imports: [
    arr,
  ],
  exports:[
    arr,
  ]
})
export class CoreuiModule { }
