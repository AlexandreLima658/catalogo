import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { CategoryService } from '../category-service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-category-delete',
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './category-delete.html',
  styleUrl: './category-delete.css',
})
export class CategoryDelete implements OnInit {

  form!: FormGroup
  categoryId!: string

  readonly router = inject(Router)
  readonly _service = inject(CategoryService)
  readonly route = inject(ActivatedRoute)
  readonly fb = inject(FormBuilder)

  ngOnInit(): void {

    this.form = this.fb.group({
      name: [{value: '', disabled: true}],
      description: [{value: '', disabled: true}]
    })

    const id = this.route.snapshot.paramMap.get("id")

    if(id) {
      this.categoryId = id;
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

  deleteCategory(): void {

    const id = this.categoryId

    if(id) {
      this._service.delete(id).subscribe(() => {
        this._service.showMessage("Category deleted")
        this.router.navigate(["/categories"])
      })
    } else {
      this._service.showMessage("Id not found")
    }
  }

  cancel(): void {
     this.router.navigate(["/categories"])
  }

}
