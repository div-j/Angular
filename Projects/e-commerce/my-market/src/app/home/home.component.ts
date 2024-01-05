import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';  // interface 
import { RouterModule } from '@angular/router';

// Material modules for components used in the template
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ShareModule } from '../shared.module';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    //CommonModule, // CommonModule is already included in standalone components
    MatCardModule,
    MatListModule,
    MatIconModule,
    RouterModule,
    HttpClientModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HttpClient],
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  selectedProduct?: Product;

  constructor(private productService: ProductService) {} // Inject ProductService only

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.fetchProducts().subscribe(res => this.products = res.products);
  }
}
