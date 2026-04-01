import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-create',
  imports: [],
  templateUrl: './category-create.html',
  styleUrl: './category-create.css',
})
export class CategoryCreate implements OnInit{

  constructor(private router: Router){}

  ngOnInit(): void {

  }

  cancel(): void {
     this.router.navigate(["/categories"])
  }

}
