import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CategoryService } from '../category-service';
import { Category } from '../category-model';
import { RouterLink } from "@angular/router";
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-category-read',
  templateUrl: './category-read.html',
  styleUrl: './category-read.css',
  imports: [RouterLink],
})
export class CategoryRead implements OnInit{

  categories: Category[]

  readonly _service = inject(CategoryService)
  readonly cd = inject(ChangeDetectorRef)

  ngOnInit(): void {
    this._service.read().subscribe(category => {
      this.categories = category
      this.cd.detectChanges()
      console.log(category)
    })
  }

}
