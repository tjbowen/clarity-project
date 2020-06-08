import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../mock-prices'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  products = PRODUCTS

  // NEED TO REPLACE W/
  totalPrice = 25
  productQuantity = 1

  quantity(val: number, price: number): void{
    this.totalPrice = val * price
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
