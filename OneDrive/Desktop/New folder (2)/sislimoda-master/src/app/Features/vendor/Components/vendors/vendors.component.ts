import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { VendorsService } from '../../Services/vendors.service';
import { Vendor } from '../../Interfaces/Vendor';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent implements OnInit {
  ColumnMode = ColumnMode;

  vendors: Vendor[] = []

  constructor(private _VendorsService:VendorsService){
    
  }

  ngOnInit(): void {
      this._VendorsService.getAllVendors().subscribe((res) => {
        console.log(res);
        this.vendors = res
      })
  }

  


  borderClass(row: any) {
    return 'row-border';
  }
}
