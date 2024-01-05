import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  providers: [HttpClient],
})
export class ProductComponent implements OnInit {

  @Input() product?: Product;


  constructor(private productservice: ProductService, private route: ActivatedRoute, private location: Location) { }

  displayProducts(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productservice.fetchProductById(id)
        .subscribe(res => this.product = res);
  }

  ngOnInit(): void {
    this.displayProducts();
  }

  goBack(): void {
    this.location.back();
  }

}
