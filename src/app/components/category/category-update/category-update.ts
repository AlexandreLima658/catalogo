import { Component, inject, OnInit } from '@angular/core';
import { CategoryService } from '../category-service';

import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common'
import { Category } from '../category-model';


@Component({
  selector: 'app-category-update',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './category-update.html',
  styleUrl: './category-update.css',
})
export class CategoryUpdate implements OnInit{

  form!: FormGroup
  categoryId!: string

  readonly _service = inject(CategoryService)
  readonly router = inject(Router)
  readonly route = inject(ActivatedRoute)
  readonly fb = inject(FormBuilder)

  ngOnInit(): void {

    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['']
    })

    const id = this.route.snapshot.paramMap.get("id")

    if(id) {
      this.categoryId = id
      this._service.readById(id).subscribe(category => {
        this.form.patchValue({
          name: category.name,
          description: category.description
        })
      })
    } else {
      this._service.showMessage("id not found")
    }
  }

  updateCategory() {
    if (this.form.invalid) return;

    const category: Category = {
      ...this.form.value,
      categoryId: this.categoryId,
      isActive: true
    };

    this._service.update(category).subscribe(() => {
      this._service.showMessage("Category Updated")
      this.router.navigate(["/categories"])
    })
  }

  cancel(): void {
     this.router.navigate(["/categories"])
  }
}
