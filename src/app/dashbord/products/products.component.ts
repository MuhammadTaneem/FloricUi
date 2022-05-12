import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products = [
    {'name': 'cap', 'price':99, 'description':'loading'},
  {'name': 'shirt', 'price':999, 'description':'not good'},
  {'name': 'shirt', 'price':999, 'description':'not good'},
  {'name': 'shirt', 'price':999, 'description':'not good'},
  {'name': 'shirt', 'price':999, 'description':'not good'},
  {'name': 'shirt', 'price':999, 'description':'not good'},
  {'name': 'shirt', 'price':999, 'description':'not good'},
  {'name': 'shirt', 'price':999, 'description':'not good'},
  {'name': 'shirt', 'price':999, 'description':'not good'},
  {'name': 'shirt', 'price':999, 'description':'not good'},
  {'name': 'shirt', 'price':999, 'description':'not good'},
  {'name': 'shirt', 'price':999, 'description':'not good'},
  {'name': 'shirt', 'price':999, 'description':'not good'},
  {'name': 'shirt', 'price':999, 'description':'not good'},
  {'name': 'shirt', 'price':999, 'description':'not good'},
  {'name': 'shirt', 'price':999, 'description':'not good'},
  {'name': 'shirt', 'price':999, 'description':'not good'},
  {'name': 'shirt', 'price':999, 'description':'not good'},
  {'name': 'shirt', 'price':999, 'description':'not good'},
  {'name': 'shirt', 'price':999, 'description':'not good'},]

  constructor() { }

  ngOnInit(): void {
  }

}
