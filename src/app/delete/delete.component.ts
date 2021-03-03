import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  products: string[];
    removeProducts(productList) {
    const index: number = this.products.indexOf(productList);
    //let index = this.products.findIndex( e => e. === id);
    if (index !== -1){
      this.products.splice(index,1);
    }
  }
}