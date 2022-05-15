import { Product } from './../dashbord.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  productsSubscribe: any ;
  products:any;

  // products = [
  // {'name': 'cap', 'price':99, 'description':'loading'},
  // {'name': 'shirt', 'price':999, 'description':'not good'},
  // {'name': 'shirt', 'price':999, 'description':'not good'},
  // {'name': 'shirt', 'price':999, 'description':'not good'},
  // {'name': 'shirt', 'price':999, 'description':'not good'},
  // {'name': 'shirt', 'price':999, 'description':'not good'},
  // {'name': 'shirt', 'price':999, 'description':'not good'},
  // {'name': 'shirt', 'price':999, 'description':'not good'},
  // {'name': 'shirt', 'price':999, 'description':'not good'},
  // {'name': 'shirt', 'price':999, 'description':'not good'},
  // {'name': 'shirt', 'price':999, 'description':'not good'},
  // {'name': 'shirt', 'price':999, 'description':'not good'},
  // {'name': 'shirt', 'price':999, 'description':'not good'},
  // {'name': 'shirt', 'price':999, 'description':'not good'},
  // {'name': 'shirt', 'price':999, 'description':'not good'},
  // {'name': 'shirt', 'price':999, 'description':'not good'},
  // {'name': 'shirt', 'price':999, 'description':'not good'},
  // {'name': 'shirt', 'price':999, 'description':'not good'},
  // {'name': 'shirt', 'price':999, 'description':'not good'},
  // {'name': 'shirt', 'price':999, 'description':'not good'},]

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productsSubscribe=
    this.route.data.subscribe((data) => {
      this.products =  data['data'].product.results ;
      // console.log( data['data'].product );
      console.log(this.products)
      // console.log(data.data.viewposts, data.data.count);
    });
  }

}
