import { Component, OnInit } from '@angular/core';
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

  constructor(
    private service: CategoryService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ){}

  ngOnInit(): void {

    this.form = this.fb.group({
      name: [{value: '', disabled: true}],
      description: [{value: '', disabled: true}]
    })

    const id = this.route.snapshot.paramMap.get("id")

    if(id) {
      this.categoryId = id;
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

  deleteCategory(): void {

    const id = this.categoryId

    if(id) {
      this.service.delete(id).subscribe(() => {
        this.service.showMessage("Category deleted")
        this.router.navigate(["/categories"])
      })
    } else {
      this.service.showMessage("Id not found")
    }
  }

  cancel(): void {
     this.router.navigate(["/categories"])
  }

}
