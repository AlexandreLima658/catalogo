import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CategoryService } from '../../components/category/category-service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit{

  totalCategories: number = 0;

  constructor(
    private service: CategoryService,
    private cd: ChangeDetectorRef
  ){}

  ngOnInit(): void {
    this.loadCategories()
  }

  loadCategories(){
    this.service.countCategories().subscribe({
      next: (data) => {
        this.totalCategories = data
        this.cd.detectChanges()
      },
      error: () => {
        this.service.showMessage("Error ao buscar as categorias")
      }
    })
  }

}
