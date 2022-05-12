import { Component, OnInit } from '@angular/core';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  plush = faPlus;
  minus = faMinus;


  quantity = 1;
  price = 99;
  subprice = this.price;
  



  


  constructor() { }

  ngOnInit(): void {
  }

  incriment(index:number){
    this.quantity++;
    this.subprice = this.price*this.quantity;
  }

  decriment(index:number){
    if(this.quantity>1){
      this.quantity--;
    }
  
    this.subprice = this.price*this.quantity;
  }

}

