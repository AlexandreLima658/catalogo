import { Injectable, OnInit } from '@angular/core';
import { Category } from './category-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CategoryService implements OnInit {

  baseUrl = "http://localhost:8080/categories"

  constructor(
    private http: HttpClient,
    private snack: MatSnackBar
  ){}

  ngOnInit(): void {

  }

  showMessage(msg: string): void {
    this.snack.open(msg, '' , {
      duration: 3000,
      panelClass:['success-snackbar'],
      horizontalPosition: 'right',
      verticalPosition: 'bottom'
    })
  }

  create(category: Category): Observable<Category> {
    return this.http.post<Category>(this.baseUrl, category)
  }

  read(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl)
  }

  readById(categoryId: String): Observable<Category> {
    const url = `${this.baseUrl}/${categoryId}`
    return this.http.get<Category>(url)
  }

  update(category: Category): Observable<Category> {
     const url = `${this.baseUrl}/${category.categoryId}`
     return this.http.put<Category>(url, category)
  }

  delete(id: string): Observable<Category> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Category>(url)
  }

}
