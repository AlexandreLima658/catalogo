import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category-service';

import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common'


@Component({
  selector: 'app-category-update',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './category-update.html',
  styleUrl: './category-update.css',
})
export class CategoryUpdate implements OnInit{

  form!: FormGroup

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
      this.service.readById(id).subscribe(category => {
        this.form.patchValue(category)
      })
    } else {
      this.service.showMessage("id not found")
    }
  }

  updateCategory() {
    if (this.form.invalid) return;

    const category = this.form.value;

    this.service.update(category).subscribe(() => {
      this.service.showMessage("Category updated!")
      this.router.navigate(["/categories"])
    })
  }

  cancel(): void {
     this.router.navigate(["/categories"])
  }
}
