import { Product, Ratting } from './dashbord.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DashbordService {

  
  // products = new Subject<{product:Product;count: number }>();
  products = new Subject<{product:Product }>();


  // categories: Category[]=[]


  constructor(  
      private http: HttpClient,
      ) { }


  //  apiurl 
  // apiurl = 'http://127.0.0.1:8000/api/products/category/';
  BACKEND_URL = environment.apiUrl + 'api/';


  invoke_products(
    s: string='',
    page: number=1,
    page_size: number=30){
    console.log(s,'asdfasdfdsaf');
    const queryParams = `?search=${s}&page=${page}&page_size=${page_size}`;
    this.http.get<Product>(
      this.BACKEND_URL+'products/list/'+ queryParams
    ).subscribe(productsData=>{
      this.products.next({product : productsData});
      console.log(productsData);
    });
  }

  // invoke_products(
  //   s: string = '',
  //   page: number = 1,
  //   page_size: number = 10,){
  //   console.log(s,'asdfasdfdsaf');
  //   const queryParams = `?search=${s}&page=${page}&page_size=${page_size}`;
  //   this.http.get<{product:Product; results:any; count:number}>(
  //     this.BACKEND_URL+'products/list/'+ queryParams
  //   ).subscribe(productsData=>{
  //     this.products.next({product : productsData.results, count:productsData.count});
  //     console.log(productsData);
  //   });
  // }




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


  invoke_product_details(pk:string){
    return this.http.get<Product>(
      this.BACKEND_URL+'products/list/'+pk
    );
  }

  invoke_product_ratting(pk:string){
    const queryParams = `?id=${pk}`;
    return this.http.get<Ratting>(
      this.BACKEND_URL+'ratting/'+queryParams
    );
  }

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
