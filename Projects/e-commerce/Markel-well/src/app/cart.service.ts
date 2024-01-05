import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  cart$: Observable<Product[]> = this.cartItems.asObservable();


  addToCart(product: Product): void {
    const currentCart = this.cartItems.getValue();
    if (!currentCart.find(item => item.id === product.id)) {
      const updatedCart = [...currentCart, { ...product }];
      this.cartItems.next(updatedCart);
    }
  }

  getCart(): Product[] {
    return this.cartItems.getValue();
  }

  clearCart(): void {
    this.cartItems.next([]);
  }

  constructor() { }
}
