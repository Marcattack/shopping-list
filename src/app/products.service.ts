import { Injectable } from '@angular/core';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  create(product: Product): Product[] {
    let products = this.list();
    products.push(product);
    products.sort(function (a, b) {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    });
    window.localStorage.setItem('allProducts', JSON.stringify(products));

    return products;
  }

  list(): Product[] {
    const value = window.localStorage.getItem('allProducts');
    if (value) {
      return JSON.parse(value);
    }
    return [] as Product[];
  }

  delete(productName: string): Product[] {
    let products = this.list();
    products.filter(product => product.name !== productName);
    products.sort(function (a, b) {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    });
    window.localStorage.setItem('allProducts', JSON.stringify(products));

    return products;
  }
  
}
