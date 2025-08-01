import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomePageComponent,
    ProductFormComponent,
    ProductTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class AdminModule { }
