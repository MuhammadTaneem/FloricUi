import { AppService } from './../../app.service';
import { Component, OnInit } from '@angular/core';
import { Category } from '../dashbord.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  // navlist =["Women's Fashion","men's Fashion", 'Health & Beauty','Electronic Devices','Home Appliances','Sports & Outdoor',"men's Fashion", 'Health & Beauty','Electronic Devices','Home Appliances','Sports & Outdoor'];
  navItems :Category | any= [] ;
  constructor(private appService:AppService) { }

  
  ngOnInit(): void {

    // this.navItems =this.appService.getnavitems();
  this.appService.getnavitems().subscribe((navItems)=>{
          // this.categories.next(navItems);
          this.navItems = navItems;
          console.log(navItems);
          // return  this.get_categories();
        });

    // this.getNavs();
    
    
    
    // .subscribe((data) => {
    //   this.viewPost = data.viewposts;
    //   this.length = data.count;
    //   // console.log(data);
    // });
  }

}
