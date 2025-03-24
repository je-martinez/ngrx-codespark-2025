import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../types';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private readonly BASE_URL = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/products`);
  }
}
