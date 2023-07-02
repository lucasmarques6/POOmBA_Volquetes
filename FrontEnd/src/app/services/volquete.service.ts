import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Volquete } from '../models/volquete';

@Injectable({
  providedIn: 'root'
})
export class VolqueteService {
  url = "http://localhost:3000/api/volquetes/";
  
  constructor(private http: HttpClient) { }

  getVolquetes(): Observable<any> {
    return this.http.get(this.url);
  }

  getVolquete(id:string): Observable<any>{
    return this.http.get(this.url + id);
  }

  postVolquete(volquete: Volquete): Observable<any>{
    return this.http.post(this.url, volquete);
  }
  
  deleteVolquete(id:string): Observable<any>{
    return this.http.delete(this.url + id);
  }
}