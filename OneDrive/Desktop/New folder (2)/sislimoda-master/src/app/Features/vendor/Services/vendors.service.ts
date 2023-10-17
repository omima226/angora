import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vendor } from '../Interfaces/Vendor';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class VendorsService {

  constructor(private _HttpClient: HttpClient, private _Router: Router) {

  }

  addVendor(vendor: Vendor): Observable<any> {
    return this._HttpClient.post(environment.baseUrl + '/api/Vendor/Add', vendor)
  }

  updateVendor(vendorId: string, vendor: Vendor): Observable<any> {
    return this._HttpClient.post(environment.baseUrl + '/api/Vendor/Update', { ...vendor, id: vendorId })
  }

  deleteVendor(vendorId: string): Observable<any> {
    return this._HttpClient.post(environment.baseUrl + '/api/Vendor/Delete?Id=' + vendorId, {})
  }

  getAllVendors(): Observable<any> {
    return this._HttpClient.get(environment.baseUrl + '/api/Vendor/GetAll')
  }

  getVendorById(vendorId: string): Observable<any> {
    return this._HttpClient.get(environment.baseUrl + '/api/Vendor/GetById?Id=' + vendorId)
  }

  getVendorByOptionId(optionId: string): Observable<any> {
    return this._HttpClient.get(environment.baseUrl + '/api/Vendor/GetByOptionId?Id=' + optionId)
  }




}
