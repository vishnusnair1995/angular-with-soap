import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Object[];
  constructor() {
    this.products = [
        {
          id:"1",
          name:"Mac Book Pro"
        },
        {
          id:"2",
          name:"Iphone"
        }

    ];
   }

   public getProducts(){
      return this.products;
   }
  ngOnInit() {
  }

}








