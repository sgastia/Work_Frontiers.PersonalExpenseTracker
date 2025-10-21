import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseDetailComponent } from './expenses/expense-detail/expense-detail.component';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { CategoryDetailComponent } from './categories/category-detail/category-detail.component';
import { HomeComponent } from './home/home.component';
import { ExpensesListComponent } from './expenses/expenses-list/expenses-list.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    HeaderComponent,
    HomeComponent,
    ExpensesListComponent,
    ExpenseDetailComponent,
    CategoriesListComponent,
    CategoryDetailComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
