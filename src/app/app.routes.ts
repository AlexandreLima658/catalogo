import { Routes } from '@angular/router';
import { CategoriaCrud } from './views/categoria-crud/categoria-crud';
import { Home } from './views/home/home';
import { CategoryCreate } from './components/category/category-create/category-create';
import { CategoryUpdate } from './components/category/category-update/category-update';
import { CategoryDelete } from './components/category/category-delete/category-delete';

export const routes: Routes = [
   {
    path: "",
    component: Home
  },
  {
    path: "categories",
    component: CategoriaCrud
  },
  {
    path: "categories/create",
    component: CategoryCreate
  },
  {
    path: "categories/update/:id",
    component: CategoryUpdate
  },
  {
    path: "categories/delete/:id",
    component: CategoryDelete
  }
];
