import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/auth/auth.service';
import { ProfileService } from 'src/app/auth/profile.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  plush = faPlus;
  minus = faMinus;


  quantity = 1;
  price = 0;
  subprice = this.price;

  userSubscribe:any;
  carts:{id:number,author:number, product_id:number, product_img:string, product_name:string, product_price:number,quantity:number} []=[];

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
   
    this.loadData();
    this.priceCalulator();

  }

  priceCalulator(){
    this.price = 0;
    for(let i=0;i<this.carts.length;i++){
      this.price += this.carts[i].product_price;
    }
  }

  loadData(){
    this.userSubscribe = this.route.data.subscribe((data) => {
      // console.log(data);
      this.carts = data['data'];
      console.log(this.carts);
    });

  }

  incriment(index:number){
    // index--;
    console.log(index);
    console.log("price", this.carts[index].product_price);
    console.log("quantity", this.carts[index].quantity);
    let pr =  this.carts[index].product_price/this.carts[index].quantity;
    console.log("per unit price",pr);
    this.carts[index].quantity = ++this.carts[index].quantity;
    // this.quantity++;
    this.carts[index].product_price  = pr * this.carts[index].quantity;
    console.log("total price ",this.carts[index].quantity ,"items", this.carts[index].product_price);
    this.priceCalulator();
  }
  decriment(index:number){
  
    if(this.carts[index].quantity>1){
      console.log("comming")
      let pr =  this.carts[index].product_price/this.carts[index].quantity;
      this.carts[index].quantity = --this.carts[index].quantity;
      this.carts[index].product_price  = pr * this.carts[index].quantity;
    console.log("total price ",this.carts[index].quantity ,"items", this.carts[index].product_price);
    this.priceCalulator();



    }
 
  }
  ngOnDestroy(): void {
    this.userSubscribe.unsubscribe();
  }
  

}





