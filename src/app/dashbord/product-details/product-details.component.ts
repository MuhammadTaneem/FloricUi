import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { faStar} from '@fortawesome/free-solid-svg-icons';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
    productsSubscribe:any;
    product:any;
    ratting:any;
    currentRate = 5;
    star = faStar;
    imageObject :{
        image: string,
        thumbImage: string,
        title: string|null
    }[]=[]

    ability = 'out of stock'
    ab_color = 'redangerd'
    stars:number[] = [0,0,0,0,0]
    rating = 4 ;
    // out of stock 

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.productsSubscribe=
        this.route.data.subscribe((data) => {
        this.product =  data['data'][0] ;
        this.ratting = data['data'][1];
        console.log(this.ratting);
        this.setImage();
        this.abilityfunc(this.product.quantity)
        console.log( this.product );
        });
    }

    abilityfunc(q:number){

        this.ability = 'out of stock ';
        this.ab_color = 'danger';
        if(q>0){
            this.ability = 'available';
            this.ab_color = 'success';
        }

    }


    counter(str:number=-1){ 
        for(let i = 0;i<str;i++){
            this.stars[i]=1;
        }
        console.log(this.stars);

    }


    setImage(){

        this.imageObject.push({image:this.product.product_img1, thumbImage: this.product.product_img1, title: ''});
        this.imageObject.push({image:this.product.product_img2, thumbImage: this.product.product_img2, title: ''});
        this.imageObject.push({image:this.product.product_img3, thumbImage: this.product.product_img3, title: ''});
        this.imageObject.push({image:this.product.product_img4, thumbImage: this.product.product_img4, title: ''});
    }



//   imageObject = [{
//     image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
//     thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
//     title: 'Hummingbirds are amazing creatures'
// }, {
//     image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg',
//     thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg'
// }, {
//     image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
//     thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
//     title: 'Example with title.'
// },{
//     image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
//     thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
//     title: 'Hummingbirds are amazing creatures'
// }, {
//     image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg',
//     thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg'
// }, {
//     image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
//     thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
//     title: 'Example two with title.'
// }];

  
}
