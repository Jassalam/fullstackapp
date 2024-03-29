import { Injectable } from '@angular/core';
import { Listing } from './types';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

const httpOptions={
  headers: new HttpHeaders({
    'Content-Type' : 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  constructor(
    private http: HttpClient,
  ) { }


  getListings(): Observable<Listing[]>{
    return this.http.get<Listing[]>('/api/listings');
  }

  getListingById(id: String): Observable<Listing>{
      return this.http.get<Listing>(`/api/listings/${id}`);
  }

  addViewToListing(id: String): Observable<Listing>{
    return this.http.post<Listing>(
      `/api/listings/${id}/add-view`,
      {},
      httpOptions,
    );
  }

  getListingsForUser(): Observable<Listing[]>{
    return this.http.get<Listing[]>('/api/users/12345/listings');
  }
 
  deleteListing(id: String): Observable<any>{
    return this.http.delete(`/api/listings/${id}`);
  }

  createListing(name: String, description: String, price: Number): Observable<Listing>{
    return this.http.post<Listing>(
      '/api/listings/add',
      {name, description, price},
      httpOptions,
    );
  }

  editListing(id: String, name: String, description: String, price: Number): Observable<Listing>{
    return this.http.post<Listing>(
      `/api/listings/${id}`,
      {name, description, price},
      httpOptions,
    );
  }
  

}  

