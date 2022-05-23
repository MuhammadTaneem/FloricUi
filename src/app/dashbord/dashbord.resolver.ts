import { Product } from './dashbord.model';
import { AppService } from './../app.service';
import { DashbordService } from './dashbord.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashbordResolver implements Resolve<boolean> {

  constructor(
    private dashbordService:  DashbordService,
    private appService : AppService
    
    ){}
    

 
   
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product>|any {
    // this.dashbordService.get_products();
    this.dashbordService.invoke_products()

    // return of(true);

    return new Promise((resolve, reject) => {
    //   this.dashbordService.invoke_products()
    //   .subscribe((products) => {
    //     resolve(products);
    //     console.log("printing from ------------"+products);
    //     return products;
    //   });
    

      this.dashbordService.get_products().subscribe(products=>{
        resolve(products);
        console.log(products);
        return products;
      })

    });
  }
}
