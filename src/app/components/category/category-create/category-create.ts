import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category-model';
import { CategoryService } from '../category-service';

@Component({
  selector: 'app-category-create',
  imports: [],
  templateUrl: './category-create.html',
  styleUrl: './category-create.css',
})
export class CategoryCreate implements OnInit{

  category: Category = {
    name: 'Filmes',
    description: 'Melhor filme do ano',
    isActive: true
  }

  constructor(
    private router: Router,
    private service: CategoryService
  ){}


  ngOnInit(): void {

  }

  createCategory(): void {
    this.service.create(this.category).subscribe(() => {
      this.service.showMessage("Category create succesfully")
      this.router.navigate(["/categories"])
    })
  }

  cancel(): void {
     this.router.navigate(["/categories"])
  }

}
