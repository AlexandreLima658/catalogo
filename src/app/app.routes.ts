import { Routes } from '@angular/router';
import { CategoriaCrud } from './views/categoria-crud/categoria-crud';
import { Home } from './views/home/home';
import { CategoryCreate } from './components/category/category-create/category-create';
import { CategoryUpdate } from './components/category/category-update/category-update';
import { CategoryDelete } from './components/category/category-delete/category-delete';
import { Login } from './components/login/login';
import { Layout } from './views/layout/layout';

export const routes: Routes = [

  {
    path: "login",
    component: Login
  },
  {
    path: "",
    component: Layout,
    children: [
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
        },
    ]
  }
];
