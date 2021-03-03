import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
    removeProducts(productList) {
    let index = this.products.indexOf(productList);
    if (index !== -1){
      this.products.splice(index,1);
    }
  }
  // removeProducts(id) {
  //   let index = this.products.findIndex( e => e.id === id);
  //   if (index !== -1){
  //     this.products.splice(index,1);
  //   }
  // }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/