import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'admin-product-table',
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.css'
})
export class ProductTableComponent {

  @Output('onDeleteProduct')
  public eventEmitter: EventEmitter<string> = new EventEmitter();

  @Input()
  public products: Product[] = [];

  public deleteProduct(id: string): void {
    this.eventEmitter.emit(id)
  }
}
