import { Injectable, OnInit } from '@angular/core';
import { Category } from './category-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class CategoryService implements OnInit {

  baseUrl = "http://localhost:8080/categories"

  constructor(
    private http: HttpClient
  ){}

  ngOnInit(): void {

  }

  showMessage(msg: string): void {
    console.log(msg)
  }

  create(category: Category): Observable<Category> {
    return this.http.post<Category>(this.baseUrl, category)
  }

  read(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl)
  }

}
