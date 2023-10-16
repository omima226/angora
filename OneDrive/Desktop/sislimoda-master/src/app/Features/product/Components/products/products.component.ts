import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Product } from 'src/assets/interfaces/Product';
import { ProductsService } from '../../Services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  ColumnMode = ColumnMode;

  products: Product[] = []

  constructor(private _ProductsService: ProductsService) {

  }

  ngOnInit(): void {
    this._ProductsService.getAllProducts().subscribe((res) => {
      console.log(res);
      this.products = res
    })
  }






  borderClass(row: any) {
    return 'row-border';
  }

}
