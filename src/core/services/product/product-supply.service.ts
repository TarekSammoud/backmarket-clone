import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { ProductSupply } from '../../entities/product/product-supply'; 

@Injectable({
  providedIn: 'root'
})
export class ProductSupplyService {
  private apiUrl = `${environment.apiBaseUrl}/productSupply`;

  constructor(private http: HttpClient) {}

  addSupply(supply: ProductSupply): Observable<ProductSupply> {
    return this.http.post<ProductSupply>(`${this.apiUrl}/add`, supply);
  }

  updateSupply(supply: ProductSupply): Observable<ProductSupply> {
    return this.http.put<ProductSupply>(`${this.apiUrl}/update`, supply);
  }

  getAllSupplies(): Observable<ProductSupply[]> {
    return this.http.get<ProductSupply[]>(`${this.apiUrl}/all`);
  }

  getSupplyById(id: number): Observable<ProductSupply> {
    return this.http.get<ProductSupply>(`${this.apiUrl}/${id}`);
  }

  deleteSupply(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
