import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Category } from '../Interfaces/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private _HttpClient: HttpClient, private _Router: Router) {

  }

  getCategoryById(categoryId: string): Observable<any> {
    return this._HttpClient.get(environment.baseUrl + '/api/Category/GetById?catId=' + categoryId)
  }

  addCategory(category: Category): Observable<any> {
    return this._HttpClient.post(environment.baseUrl + '/api/Category/Add', category)
  }

  UpdateCategory(categoryId: string, category: Category): Observable<any> {
    return this._HttpClient.post(environment.baseUrl + '/api/Category/Update', { ...category, id: categoryId })
  }

  deleteCategory(categoryId: string): Observable<any> {
    return this._HttpClient.post(environment.baseUrl + '/api/Category/Delete?Id=' + categoryId, {})
  }

  getAllMainCategories(): Observable<any> {
    return this._HttpClient.get(environment.baseUrl + '/api/Category/GetAllMainCategory')
  }

  getAllSubCategoriesByCategoryId(categoryId: string): Observable<any> {
    return this._HttpClient.get(environment.baseUrl + '/api/Category/GetAllSubById?catId=' + categoryId)
  }



}
