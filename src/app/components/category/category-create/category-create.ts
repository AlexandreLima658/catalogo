import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category-model';
import { CategoryService } from '../category-service';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-category-create',
  imports: [FormsModule, ],
  templateUrl: './category-create.html',
  styleUrl: './category-create.css',
})
export class CategoryCreate implements OnInit{


readonly _service = inject(CategoryService)
readonly router = inject(Router)

 category: Category = {
    name: '',
    description: '',
    isActive: true
  }


  ngOnInit(): void {

  }

  createCategory(): void {
    this._service.create(this.category).subscribe(() => {
      this._service.showMessage("Created successfully!")
      this.router.navigate(["/categories"])
    })
  }

  cancel(): void {
     this.router.navigate(["/categories"])
  }

}
