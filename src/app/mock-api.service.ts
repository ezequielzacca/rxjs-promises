import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { MOCK_CUSTOMERS } from 'src/mock-data/mock-customers';
import { MOCK_PRODUCTS } from 'src/mock-data/mock-products';
import { MOCK_PURCHASES } from 'src/mock-data/mock-purchases';


@Injectable({
  providedIn: 'root'
})
export class MockApiService {

  constructor() { }

  private mockApiCall<T>(data: T): Observable<T> {
    return of(data).pipe(delay(500))
  }

  getProducts() {
    return this.mockApiCall(MOCK_PRODUCTS)
  }

  getCustomers() {
    return this.mockApiCall(MOCK_CUSTOMERS)
  }

  getPurchases() {
    return this.mockApiCall(MOCK_PURCHASES)
  }
}
