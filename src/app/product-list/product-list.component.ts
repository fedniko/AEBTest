import { Component, OnInit } from '@angular/core';
import { products } from './data';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products = products;
  title: string;
  description: string;
  photo: string;
  price: number;
  isAdd: boolean = false;

  constructor(
    // tslint:disable-next-line:variable-name
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  showAdd() {
    this.isAdd = !this.isAdd;
  }

  addProduct() {
    this.products.push({title: this.title, description: this.description, price: this.price, photo:this.photo});
    this.title = '';
    this.description = '';
    this.price = 0;
    this.photo = '';
  }

  deleteProduct(product) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i] == product)
        this.products.splice(i, 1);
        this._snackBar.open('Товар успешно удален!', 'Закрыть', {duration: 3000});
    }
  }
}
