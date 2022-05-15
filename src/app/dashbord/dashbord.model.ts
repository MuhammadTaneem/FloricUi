export interface Category {
    id: number;
    name: string;
    cat_img: string;
  }

  export interface Product {
    id: number;
    name : string;
    description: string;
    weight: string;
    quantity: number;
    color: string;
    brand:string;
    model:string;
    price: number;
    size:string,
    product_img: string;
    author: number;
    product_category: number;

  }