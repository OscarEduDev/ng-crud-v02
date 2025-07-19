import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'admin-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor(private productsService: ProductsService) {}

  public get products(): Product[] {
    return this.productsService.products;
  }

  public addProduct(product: Product): void {
    this.productsService.addProduct(product);
  }

  public deleteProduct(id: string): void {
    this.productsService.deleteProduct(id);
  }
}
