import { Component, EventEmitter, Output } from '@angular/core';

import { v4 as uuid } from 'uuid';

import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'admin-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {

  @Output('onAddProduct')
  public eventEmitter: EventEmitter<Product> = new EventEmitter();

  public product: Product = {
    id: uuid(),
    name: '',
    description: '',
    price: 0
  }

  public submitForm(): void {
    if (this.product.name.length === 0 || this.product.description.length === 0) return;
    this.eventEmitter.emit(this.product)
    this.product = {
      id: uuid(),
      name: '',
      description: '',
      price: 0
    }
  }
}
