import { Product } from './dashbord.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DashbordService {

  
  products = new Subject<{product:Product}>();
  // categories: Category[]=[]


  constructor(  
      private http: HttpClient,
      ) { }


  //  apiurl 
  // apiurl = 'http://127.0.0.1:8000/api/products/category/';
  BACKEND_URL = environment.apiUrl + 'api/';


  invoke_products(){
    this.http.get<Product>(
      this.BACKEND_URL+'products/list/'
    ).subscribe(productsData=>{
      this.products.next({product : productsData});
      console.log(productsData);
    });
  }

  //   invoke_products(){
  //   this.http.get<{id: number,
  //     name : string,
  //     description: string,
  //     weight: string,
  //     quantity: number,
  //     color: string,
  //     brand:string,
  //     model:string,
  //     price: number,
  //     size:string,
  //     product_img: string,
  //     author: number,
  //     product_category: number}>(
  //     this.BACKEND_URL+'products/list/'
  //   ).subscribe(productsData=>{
  //     this.products.next(productsData);
  //     console.log(productsData);
  //   });
  // }

  // invoke_products(){
  //   return this.http.get<Product>(
  //     this.BACKEND_URL+'products/list/'
  //   );
  // }

  get_products(){
    return this.products.asObservable();
  }

    // getposts(
  //   s: string = '',
  //   page: number = 1,
  //   page_size: number = 10,
  //   user: string = ''
  // ) {
  //   const queryParams = `?search=${s}&page=${page}&page_size=${page_size}&user=${user}`;
  //   if (user) {
  //     this.http
  //       .get<{ viewPost: ViewPost[]; results: any; count: number }>(
  //         this.BACKEND_URL + 'userposts/' + queryParams
  //       )
  //       .subscribe((postData) => {
  //         this.viewPost = postData.results;
  //         this.loadPostImage(postData.count);
  //       });
  //   } else {
  //     this.http
  //       .get<{ viewPost: ViewPost[]; results: any; count: number }>(
  //         this.BACKEND_URL + 'postlist/' + queryParams
  //       )
  //       .subscribe((postData) => {
  //         this.viewPost = postData.results;
  //         this.loadPostImage(postData.count);
  //       });
  //   }
  // }



}
