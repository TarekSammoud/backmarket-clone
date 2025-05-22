import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { ProductCategory } from '../../entities/product/product-category'; 

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {
  private apiUrl = `${environment.apiBaseUrl}/productCategory`;

  constructor(private http: HttpClient) {}

  addCategory(category: ProductCategory): Observable<ProductCategory> {
    return this.http.post<ProductCategory>(`${this.apiUrl}/add`, category);
  }

  updateCategory(category: ProductCategory): Observable<ProductCategory> {
    return this.http.put<ProductCategory>(`${this.apiUrl}/update`, category);
  }

  getAllCategories(): Observable<ProductCategory[]> {
    return this.http.get<ProductCategory[]>(`${this.apiUrl}/all`);
  }

  getCategoryById(id: number): Observable<ProductCategory> {
    return this.http.get<ProductCategory>(`${this.apiUrl}/${id}`);
  }

  deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
