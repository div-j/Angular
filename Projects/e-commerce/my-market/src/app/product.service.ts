import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable, tap, catchError } from 'rxjs';
import { of } from 'rxjs'; // Import for error handling

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  fetchProducts(): Observable<{ products: Product[]; }> {
    return this.http.get<{ products: Product[]}>(this.apiUrl);
  }

  fetchProductById(id: number): Observable<Product> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      tap(_ => this.log(`fetched product id=${id}`)),
      catchError(this.handleError<Product>(`getProduct id=${id}`))
    );
  }

  private log(message: string): void {
    console.log(message); // Simple logging implementation
  }

  private handleError<T>(operation = 'operation', result?: T): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {
      console.error(error); // Log the error
      // Optionally return a user-facing error message
      return of(result as T); // Return a default value or observable
    };
  }
}
