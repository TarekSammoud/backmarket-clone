import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { ProductMedia } from '../../entities/product/product-media'; 

@Injectable({
  providedIn: 'root'
})
export class ProductMediaService {
  private apiUrl = `${environment.apiBaseUrl}/productMedia`;

  constructor(private http: HttpClient) {}

  addMedia(media: ProductMedia): Observable<ProductMedia> {
    return this.http.post<ProductMedia>(`${this.apiUrl}/add`, media);
  }

  updateMedia(media: ProductMedia): Observable<ProductMedia> {
    return this.http.put<ProductMedia>(`${this.apiUrl}/update`, media);
  }

  getAllMedias(): Observable<ProductMedia[]> {
    return this.http.get<ProductMedia[]>(`${this.apiUrl}/all`);
  }

  getMediaById(id: number): Observable<ProductMedia> {
    return this.http.get<ProductMedia>(`${this.apiUrl}/${id}`);
  }

  deleteMedia(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
