import { Category } from './../dashbord/dashbord.model';
import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';
import { faCoffee, faUser,faCartShopping , faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {



  // navlist =["Women's Fashion","men's Fashion", 'Health & Beauty','Electronic Devices','Home Appliances','Sports & Outdoor'];
  faCoffee = faCoffee;
  faUser =faUser;
  cart = faCartShopping;
  search = faMagnifyingGlass;
  minisearch = 'none';
  // navItems :{id:number,name:string,cat_img:string}[] = [];
  navItems :Category | any= [] ;

  navSubscribe:any;



  constructor(
    private route: ActivatedRoute,
    private appService:AppService,
    private router: Router
  ) {}

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


  getNavs(){
    // this.appService.get_categories().subscribe(arg => this.navItems = arg);
    // console.log(this.navItems);

    // this.navSubscribe = this.route.data.subscribe((data) => {
    //   this.navItems = data;
    //   console.log(data);
    // });
    // this.navItems = this.appService.get_categories();
    // console.log( this.appService.get_categories());
  }




  searchopen(){
    if (this.minisearch === "none") {
      this.minisearch = "block";
    } else {
      this.minisearch = "none";
    }
  }

}
