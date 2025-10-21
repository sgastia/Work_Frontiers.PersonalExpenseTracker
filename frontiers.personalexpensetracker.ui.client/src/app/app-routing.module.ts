import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExpensesListComponent } from './expenses/expenses-list/expenses-list.component';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { ExpenseDetailComponent } from './expenses/expense-detail/expense-detail.component';
export class RoutesPath {
  public static readonly Home: string = 'home';
  public static readonly ExpensesList: string = 'expenses-list';
  public static readonly ExpenseDetail: string = 'expense-detail/:id';
  public static readonly AddExpense: string = 'add-expense';
  public static readonly EditExpense: string = 'edit-expense/:id';
  public static readonly CategoriesList: string = 'categories';
  public static readonly CategoryDetail: string = 'category-detail/:id';
  public static readonly AddCategory: string = 'add-category';
  public static readonly EditCategory: string = 'edit-category/:id';
  public static readonly Reports: string = 'reports';
  public static readonly ExpensesByCategoryReport: string = 'reports/expenses-by-category';

}
const routes: Routes = [
  {
    path: RoutesPath.Home,
    component: HomeComponent,
    title: 'Home'
  },
  { path: RoutesPath.ExpensesList, component: ExpensesListComponent, title: 'Expenses' },
  { path: RoutesPath.AddExpense, component: ExpenseDetailComponent, title: 'Add expense' },
  { path: RoutesPath.CategoriesList, component: CategoriesListComponent, title: 'Categories' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
