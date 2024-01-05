// product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of,} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  fetchProducts(): Observable<{ products: Product[]; }> {
    return this.http.get<{ products: Product[]}>(this.apiUrl)
    .pipe(
          map(response => ({ products: Array.isArray(response.products) ? response.products : [] })),
      tap(_ => this.log('fetched products')),
      catchError(this.handleError<{ products: Product[] }>('fetchProducts', { products: [] }))
    );
  }



//   fetchProductById(id: number): Observable<{ products: Product[]; }> {
//     const url = `${this.apiUrl}/${id}`;
//     return this.http.get<{ products: Product[]; }>(url)
//     .pipe(
//       map(response => ({ products: Array.isArray(response.products) ? response.products : [] })),
//   tap(_ => this.log(`fetched product by id=${id}`)),
//   catchError(this.handleError<{ products: Product[] }>('fetchProducts', { products: [] }))
// );

//   }

fetchProductById(id: number): Observable<Product> {
  const productUrl = `${this.apiUrl}/${id}`;
  return this.http.get<Product>(productUrl);
}

  //Update
  updateProduct(product: Product): Observable<any> {
    return this.http.put(this.apiUrl, product, this.httpOptions)
    .pipe(
  tap(_ => this.log(`updated hero id=${product.id}`)),
  catchError(this.handleError<any>('updateProduct'))
);

  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => { 
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string): void {
    console.log(message); // Simple logging implementation
  }

  // private handleError<T>(operation = 'operation', result?: T): (error: any) => Observable<T> {
  //   return (error: any): Observable<T> => {
  //     console.error(error); // Log the error
  //     // Optionally return a user-facing error message
  //     return of(result as T); // Return a default value or observable
  //   };
  // }
}
