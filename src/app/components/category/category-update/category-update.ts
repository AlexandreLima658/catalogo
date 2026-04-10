import { Component, OnInit } from '@angular/core';
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

  constructor(
    private service: CategoryService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ){}

  ngOnInit(): void {

    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['']
    })

    const id = this.route.snapshot.paramMap.get("id")

    if(id) {
      this.categoryId = id
      this.service.readById(id).subscribe(category => {
        this.form.patchValue({
          name: category.name,
          description: category.description
        })
      })
    } else {
      this.service.showMessage("id not found")
    }
  }

  updateCategory() {
    if (this.form.invalid) return;

    const category: Category = {
      ...this.form.value,
      categoryId: this.categoryId,
      isActive: true
    };

    this.service.update(category).subscribe(() => {
      this.service.showMessage("Category updated!")
      this.router.navigate(["/categories"])
    })
  }

  cancel(): void {
     this.router.navigate(["/categories"])
  }
}
