import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid';

import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  public products: Product[] = [
    { id: uuid(), name: 'Mesa', description: 'Mesa para sala', price: 20, },
  ]

  public addProduct(product: Product): void {
    this.products.unshift(product);
  }

  public deleteProduct(id: string): void {
    this.products = this.products.filter(product => product.id !== id);
  }
}
