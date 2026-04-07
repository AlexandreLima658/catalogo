import { Injectable, OnInit } from '@angular/core';
import { Category } from './category-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pagination } from './pagination/pagination';

@Injectable({
  providedIn: 'root',
})
export class CategoryService implements OnInit {

  baseUrl = "http://localhost:8000/categories"

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

  read(): Observable<Pagination<Category>> {
    return this.http.get<Pagination<Category>>(this.baseUrl)
  }

}
