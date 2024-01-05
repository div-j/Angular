import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  // selectedProduct?: Product;

  constructor(private productservice: ProductService) {} // Inject ProductService only

  getProducts(): void {
    this.productservice.fetchProducts().subscribe(res => {
      this.products = res.products;
       console.log(res)
      });
  }

  ngOnInit(): void {
    this.getProducts();
  }

  


}
