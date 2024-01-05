import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Location } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  imports: [MatCardModule, MatButtonModule,CommonModule],
})
export class ProductComponent implements OnInit {

  product: any | Product;


  constructor(private productservice: ProductService, private route: ActivatedRoute, private location: Location) { }

  fetchProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    id && this.productservice.fetchProductById(id)
        .subscribe(res => {this.product = res;
          console.log(this.product)
        })
       
  }
  

  ngOnInit(): void {
    this.fetchProduct();
  }

  goBack(): void {
    this.location.back();
  }
  // save(): void {
  //   if (this.product) {
  //     this.productservice.updateProduct(this.product)
  //       .subscribe(() => this.goBack());
  //   }

    // addToCart(product: Product): void {
    //   this.cartService.addToCart(product);
    //   console.log(`Product added to cart: ${product.title}`);
    // }
  //}

}