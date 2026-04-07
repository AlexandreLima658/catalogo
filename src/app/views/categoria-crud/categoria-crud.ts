import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryRead } from "../../components/category/category-read/category-read";


@Component({
  selector: 'app-categoria-crud',
  imports: [CategoryRead],
  templateUrl: './categoria-crud.html',
  styleUrl: './categoria-crud.css',
})
export class CategoriaCrud implements OnInit{

  constructor(private router: Router){}

  ngOnInit(): void {

  }

  navigateToCategoryCreate(): void {
    this.router.navigate(["/categories/create"])
  }

}
